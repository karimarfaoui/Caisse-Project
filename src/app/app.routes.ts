import { Routes } from '@angular/router';
import { ConfigrationComponent } from './configration/configration.component';
import { CaisseComponent } from './caisse/caisse.component';


export const routes: Routes = [
    {path:'',title : 'Home page' , component:CaisseComponent ,},
    {
        path:'configuration',title:'Configuration page',component:ConfigrationComponent,
    },
];
