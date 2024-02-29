import { Routes } from '@angular/router';
import { ConfigurationComponent } from './pages/configuration/configuration.component';
import { IndexComponent } from './pages/index/index.component';

export const routes: Routes = [
    {path:'configuration-component',component:ConfigurationComponent},
    {path:'',component:IndexComponent},

]
