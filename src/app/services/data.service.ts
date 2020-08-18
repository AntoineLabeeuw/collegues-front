import { CollegueDto } from './../models/CollegueDto';
import { Injectable } from '@angular/core';
import { matricules } from '../mock/matricules.mock';

import { Observable, Subject } from 'rxjs';
import { creerCollegue } from '../mock/collegues.mock';
import { Collegue } from '../models/Collegue';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
// https://angular.io/guide/http#adding-headers
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};
@Injectable({
  providedIn: 'root'
})
export class DataService {
  matricules = matricules;
  col: Collegue[] = creerCollegue();
  subjectCol = new Subject<Collegue>();
  constructor(private http: HttpClient) { }
  sabonnerAColSelect(): Observable<Collegue> {
    console.log('test');
    console.log(this.subjectCol.asObservable());
    return this.subjectCol.asObservable();
  }
  listerMatricules(): any[] {
    return this.matricules;
  }
  // GET ?nom
  rechercheParNom(nom: string): Observable<string[]> {
    return this.http.get<string[]>(`https://antoine-collegues-api.herokuapp.com/collegues?nom=${nom}`);
  }
  // GET /{matricule}
  recupererCollegueCourant(matricule: string): Observable<Collegue> {
    return this.http.get<Collegue>(`https://antoine-collegues-api.herokuapp.com/collegues/${matricule}`);
  }
  selectionner(mat: string): Observable<Collegue> {
    return this.recupererCollegueCourant(mat).pipe(
      tap(col => this.subjectCol.next(col))
    );
  }

  creerCollegue(col: CollegueDto): Observable<any> {
    console.log(`test creation collegue : ${col}`);
    return this.http.post(`https://antoine-collegues-api.herokuapp.com/collegues`, JSON.stringify(col), httpOptions);
  }

  getAllCollegues(): Observable<any> {
    console.log('récupération des collègues')
    return this.http.get(`https://antoine-collegues-api.herokuapp.com/collegues`);
  }
}
