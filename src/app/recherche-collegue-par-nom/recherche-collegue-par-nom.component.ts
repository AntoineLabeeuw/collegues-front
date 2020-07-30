import { Component, OnInit, Input } from '@angular/core';
import { matricules } from '../mock/matricules.mock';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {
  @Input()
  matricules: any[];
  filteredMatricules: any[];
  constructor() { }

  ngOnInit(): void {
  }
  rechercheParNom(texte): void {
    this.filteredMatricules = this.matricules.filter(matricule => matricule.nom.toLowerCase() === texte.value.toLowerCase());
    console.log(texte.value);
  }

}
