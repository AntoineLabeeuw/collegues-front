import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { CollegueDto } from '../models/CollegueDto';
@Component({
  selector: 'app-creer-collegue',
  templateUrl: './creer-collegue.component.html',
  styleUrls: ['./creer-collegue.component.css']
})

export class CreerCollegueComponent implements OnInit {
  collegue: CollegueDto;
  constructor(private _dataSrv: DataService) { }

  ngOnInit(): void {
    this.collegue = {};
  }
  creerCollegue(): void{
    this._dataSrv.creerCollegue(this.collegue).subscribe();
  }
}
