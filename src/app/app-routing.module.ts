import { CollegueCourantComponent } from './collegue-courant/collegue-courant.component';
import { GallerieComponent } from './gallerie/gallerie.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AproposComponent } from './apropos/apropos.component';
import { Route, Routes } from '@angular/router';

export const ROUTES: Routes = [
  { path: 'accueil', component: AccueilComponent},
  { path: 'gallerie', component: GallerieComponent},
  { path: 'apropos', component: AproposComponent},
  { path: 'collegues/:matricule', component: CollegueCourantComponent },
  { path: '', pathMatch: 'full', redirectTo: 'accueil' }
];
