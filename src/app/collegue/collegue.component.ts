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
  constructor() { }
  consoleModification(): void {
    console.log('Modification du collègue');
  }
  consoleCreation(): void {
    console.log(`Création d'un nouveau collègue`);
  }
  ngOnInit(): void {
  }

}
