import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { CheckboxModule } from 'angular-bootstrap-md';

@Component({
  selector: 'app-acces',
  standalone: true,
  imports: [RouterLink, CheckboxModule, CommonModule ,FormsModule],
  templateUrl: './acces.component.html',
  styleUrl: './acces.component.css'
})
export class AccesComponent {

}
