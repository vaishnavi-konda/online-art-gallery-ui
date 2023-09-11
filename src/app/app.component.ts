import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontEnd';
  constructor(private cdr:ChangeDetectorRef){}
  ngAfterViewChecked(){
      this.cdr.detectChanges();
    
  }
}
