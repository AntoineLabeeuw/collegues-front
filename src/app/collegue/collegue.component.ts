import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models/Collegue';
@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {
  @Input()
  collegues: Collegue;
  edit = false;
  constructor() { }
  consoleModification(): void {
    this.edit = !this.edit;
    console.log('Modification du collègue');
  }
  consoleCreation(): void {
    console.log(`Création d'un nouveau collègue`);
  }
  consoleValider(email: string, photoUrl: string): void {
    this.edit = !this.edit;
    this.collegues.email = email;
    this.collegues.photoUrl = photoUrl;
    console.log(`Validation de la modification avec les informations (email=${email}, photoUrl=${photoUrl})`);
  }
  ngOnInit(): void {
  }
}
