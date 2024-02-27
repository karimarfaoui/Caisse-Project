import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CaisseComponent } from './caisse/caisse.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CaisseComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ma-Caisse';
  stringToEvaluate:string=""
  takeInput(){
    
  }
}
