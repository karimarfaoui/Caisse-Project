import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { SidebarModule } from 'primeng/sidebar';
import { IndexComponent } from './pages/index/index.component';
import { FooterComponent } from './pages/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,IndexComponent,RouterLink,SidebarModule,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ma-Caisse';
  stringToEvaluate:string=""
  takeInput(){
    
  }
}
