import { Routes } from '@angular/router';
import { ConfigurationComponent } from './pages/configuration/configuration.component';
import { IndexComponent } from './pages/index/index.component';
import { CaisseComponent } from './pages/caisse/caisse.component';
import { ClotureComponent } from './pages/cloture/cloture.component';
import { LectureComponent } from './pages/lecture/lecture.component';
import { ParametersComponent } from './pages/parameters/parameters.component';
import { PeriodiqueComponent } from './pages/periodique/periodique.component';
import { ArticleComponent } from './Config-pages/article/article.component';
import { EcranComponent } from './Config-pages/ecran/ecran.component';
import { PaiementComponent } from './Config-pages/paiement/paiement.component';
import { CommentaireComponent } from './Config-pages/commentaire/commentaire.component';
import { StockComponent } from './Config-pages/stock/stock.component';
import { AccesComponent } from './Config-pages/acces/acces.component';

export const routes: Routes = [
    {path:'configuration',component:ConfigurationComponent},
    {path:'',component:IndexComponent},
    {path:'caisse',component:CaisseComponent},
    {path:'cloture',component:ClotureComponent},
    {path:'lecture',component:LectureComponent},
    {path:'parameters',component:ParametersComponent},
    {path:'periodique',component:PeriodiqueComponent},
    {path:'article',component:ArticleComponent},
    {path:'ecran',component:EcranComponent},
    {path:'paiement',component:PaiementComponent},
    {path:'commentaire',component:CommentaireComponent},
    {path:'stock',component:StockComponent},
    {path:'acces',component:AccesComponent},
]
