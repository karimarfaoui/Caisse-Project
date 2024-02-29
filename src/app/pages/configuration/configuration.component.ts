import { Component } from '@angular/core';
import { Card, CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-configuration',
  standalone: true,
  imports: [CardModule,ButtonModule],
  templateUrl: './configuration.component.html',
  styleUrl: './configuration.component.css'
})
export class ConfigurationComponent {

}
