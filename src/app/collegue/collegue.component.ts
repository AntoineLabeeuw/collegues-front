import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models/Collegue';
@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {
  @Input()
  collegues: CollegueComponent;
  edit = false;
  constructor() { }
  consoleModification(): void {
    this.edit = !this.edit;
    console.log('Modification du collègue');
  }
  consoleCreation(): void {
    console.log(`Création d'un nouveau collègue`);
  }
  consoleValider(email, photoUrl): void {
    // in fine, sert a modifier les valeurs deja rentrées
    this.edit = !this.edit;
    console.log('Validation de la modif');
  }
  ngOnInit(): void {
  }
}
