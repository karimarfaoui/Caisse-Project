import { Component } from '@angular/core';
import { Card, CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-configuration',
  standalone: true,
  imports: [CardModule,ButtonModule,RouterLink,CommonModule,RouterOutlet],
  templateUrl: './configuration.component.html',
  styleUrl: './configuration.component.css'
})
export class ConfigurationComponent {

}
