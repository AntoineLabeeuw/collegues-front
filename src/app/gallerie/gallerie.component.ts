import { Component, OnInit } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-gallerie',
  templateUrl: './gallerie.component.html',
  styleUrls: ['./gallerie.component.css']
})
export class GallerieComponent implements OnInit {
  collegues: Array<Collegue>;
  constructor( private _dataSrv: DataService ) {}

  ngOnInit(): void {
    this._dataSrv.getAllCollegues().subscribe(
      col => this.collegues = col,
      err => {},
      () => {}
    );
  }

}
