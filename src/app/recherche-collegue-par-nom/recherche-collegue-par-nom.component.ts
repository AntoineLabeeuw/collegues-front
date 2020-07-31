import { Component, OnInit, Input } from '@angular/core';
import { matricules } from '../mock/matricules.mock';
import { DataService } from '../services/data.service';
import { Collegue } from '../models/Collegue';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {
  matricules: string[];
  constructor(private _dataSrv: DataService) { }

  ngOnInit(): void {
    this.matricules = [];
  }
  rechercheParNom(texte: string): void {
    if(texte.length !== 0) {
      this._dataSrv.rechercheParNom(texte).subscribe(
        v => this.matricules = v,
        err => {},
        () => {}
      );
    }
  }
  selectionner(matricule: string): void {
    console.log(matricule);
    this._dataSrv.selectionner(matricule).subscribe(
      () => {},
      err => {}
    );
  }
}
