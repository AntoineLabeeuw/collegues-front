import { Component, OnInit, Input } from '@angular/core';
import { matricules } from '../mock/matricules.mock';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {
  matricules: any[];
  filteredMatricules: any[];
  constructor(private _dataSrv: DataService) { }

  ngOnInit(): void {
    this.matricules = this._dataSrv.listerMatricules();
  }
  rechercheParNom(texte: string): void {
    if(texte.length === 0) {
      this.filteredMatricules = this.matricules;
    } else {
      //this.filteredMatricules = this.matricules.filter(matricule => matricule.nom.toLowerCase() === texte.toLowerCase());
      this.filteredMatricules = this._dataSrv.rechercheParNom(texte);
    }
  }
}
