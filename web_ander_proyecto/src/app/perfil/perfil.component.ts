import { Component } from '@angular/core';
import  {  faTruckFast, faUserCircle, faPaperPlane, faPeopleGroup  }  from  '@fortawesome/free-solid-svg-icons' ;



@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})

export class PerfilComponent {
  faUserCircle = faUserCircle;
  faPaperPlane = faPaperPlane;
  faPeopleGroup = faPeopleGroup;
  faTruckFast = faTruckFast;
 
}
