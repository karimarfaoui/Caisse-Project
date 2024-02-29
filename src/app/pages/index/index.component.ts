import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [SidebarModule,RouterOutlet,RouterLink,RouterLinkActive,CommonModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

  stringToEvaluate:string='';
  evaluate:any=document.getElementById("monInput");
  modepasse:string="12345";
  clickOn:boolean=false;
  isAuthentification:Boolean=false;
sidebarVisible: any;
  takeInput(num:string){
    this.stringToEvaluate=this.stringToEvaluate+num;
    console.log(this.stringToEvaluate);
    
  }
  parameter(){
    alert("vous avez deja en page de parametres");
  }
  effacer(){
    if(this.stringToEvaluate==""){
      alert("votre mode passe et null");  
    }else{
      this.stringToEvaluate="";
    }
  }
authentification(){
     const monButton=document.getElementById("monButton");
    if(this.stringToEvaluate==this.modepasse ){
      alert("log in succesfuly");
      this.isAuthentification=true;
    }else{
      alert("votre mode passe et incorrecter please try agains");
      this.stringToEvaluate="";
    }
    console.log(this.evaluate);

  }
  effacerCharachtere(){
    if(this.stringToEvaluate!=""){
      this.stringToEvaluate=this.stringToEvaluate.slice(0,-1);
    }
    else{
      alert("votre mode passe est null")
    }
  }
  
}
