import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import these modules


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user!: User;
  statusDetails!: string;
  userExists: boolean = false;

  signupForm!: FormGroup;

  constructor(private service: UserService, private router: Router,private formBuilder: FormBuilder) {
    this.user = new User('', '', '', 0, '', 'User');
  }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      userPassword: ['', [Validators.required, Validators.minLength(6)]],
      userEmail: ['', [Validators.required, Validators.email]],
      userPhone: [0, Validators.required],
      userAddress: ['', Validators.required],
      userRole: ['User', Validators.required]
    });
  }

  add() {
    this.checkUserExistence();
  }

  checkUserExistence() {
    this.service.DoesUserExist(this.user.userName).subscribe((result: any) => {
      this.userExists = result?.body;

      // After checking user existence, proceed accordingly
      if (this.userExists) {
        alert("User already exists");
      } else {
        this.registerUser();
      }
    });
  }

  registerUser() {
    var observableResult = this.service.AddUser(this.user);
    observableResult.subscribe({
      next: (r: any) => {
        alert("Signed up");
        this.router.navigate(['/login']);
        this.statusDetails = r.statusText;
      },
      error: (er) => {
        alert(er.message);
        this.statusDetails = er.message;
      }
    });
  }


}
