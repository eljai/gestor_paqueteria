import { Component } from '@angular/core';
import  {  faTruckFast, faUserCircle, faPaperPlane, faPeopleGroup  }  from  '@fortawesome/free-solid-svg-icons' ;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {

  faUserCircle = faUserCircle;
  faPaperPlane = faPaperPlane;
  faPeopleGroup = faPeopleGroup;
  faTruckFast = faTruckFast;
 
}
