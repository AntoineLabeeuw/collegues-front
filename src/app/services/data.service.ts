import { Injectable } from '@angular/core';
import { matricules } from '../mock/matricules.mock';

import { Observable } from 'rxjs';
import { creerCollegue } from '../mock/collegues.mock';
import { Collegue } from '../models/Collegue';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  matricules = matricules;
  col: Collegue[] = creerCollegue();
  constructor() { }

  listerMatricules(): any[] {
    return this.matricules;
  }
  rechercheParNom(nom: string): any[] {
    return this.matricules.filter((matricule) => (matricule.nom === nom));
  }
  recupererCollegueCourant(): Collegue[] {
    return this.col;
  }
}
