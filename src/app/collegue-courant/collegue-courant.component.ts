import { Collegue } from './../models/Collegue';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-collegue-courant',
  templateUrl: './collegue-courant.component.html',
  styleUrls: ['./collegue-courant.component.css']
})
export class CollegueCourantComponent implements OnInit {
  collegue: Collegue;
  constructor(
    private activatedRoute: ActivatedRoute,
    private _dataSrv: DataService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (params: ParamMap) => {
        this._dataSrv.selectionner(params.get('matricule')).subscribe(
          col => this.collegue = col,
          err => {},
          () => {}
        );
      }
    );
  }

}
