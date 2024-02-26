import { Component } from '@angular/core';

@Component({
  selector: 'app-caisse',
  standalone: true,
  imports: [],
  templateUrl: './caisse.component.html', 
  styleUrl: './caisse.component.css'
})
export class CaisseComponent {
  stringToEvaluate:string='';
  modepasse:string="12345";
  isAuthentification:Boolean=false;
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

  }
}
