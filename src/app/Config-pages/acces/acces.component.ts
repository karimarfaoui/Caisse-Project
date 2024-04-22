import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { style } from '@angular/animations';

@Component({
  selector: 'app-acces',
  standalone: true,
  imports: [RouterLink,CheckboxModule, CommonModule ,FormsModule],
  templateUrl: './acces.component.html',
  styleUrl: './acces.component.css'
})
export class AccesComponent {
  selectAll :boolean=false;
  checkboxes1 =[
    {title: 'Encaissement', selected:false},
    {title: 'Rapport', selected:false},
    {title: 'Remise à Zéro', selected:false},
    {title: 'Rapport Périodique', selected:false},
    {title: 'Configuration', selected:false},
    {title: 'Annulation Article', selected:false},
    {title: 'Annulation Ticket', selected:false},
  ];
  checkboxes2 =[
    {title: 'Note', selected:false},
    {title: 'Séparation Note', selected:false},
    {title: 'Prélevement', selected:false},
    {title: 'Liste Ticket', selected:false},
    {title: 'Remise', selected:false},
    {title: 'Payement Offre', selected:false},
    {title: 'Sortie De Caisse', selected:false},

  ];
  toggleSelectAll(){
    this.checkboxes1.forEach((c) => (c.selected = this.selectAll));
    this.checkboxes2.forEach((c) => (c.selected = this.selectAll));


  }
  checkboxChanged(){
    if(this.isAllCheckboxesSelected()) this.selectAll=true;
    if(this.isAllCheckboxesSelected()) this.selectAll = false;
  }
  isAllCheckboxesSelected(){
    return this.checkboxes1.every((c)=>c.selected) && this.checkboxes2.every((c)=>c.selected);
  }
}