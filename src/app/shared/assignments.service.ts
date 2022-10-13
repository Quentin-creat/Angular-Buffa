import { Injectable } from '@angular/core';
import { Assignement } from '../assignements/assignements.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  assignments: Assignement[] = [{
    rendu: false,
    nom: "francais",
    dateDeRendu: new Date('2022-01-26')
  },
  {
    rendu: true,
    nom: "francais",
    dateDeRendu: new Date('2022-03-20')
  },
  {
    rendu: true,
    nom: "francais",
    dateDeRendu: new Date('2022-11-06')
  },
  {
    rendu: false,
    nom: "francais",
    dateDeRendu: new Date('2022-12-30')
  }]

  
  constructor() { }

  getAssignements():Observable<Assignement[]> {
    return of(this.assignments);
  }

  addAssignement(assignement: Assignement): Observable<string> {
    this.assignments.push(assignement);
    return of("Assignement service : Assignement ajouté");
  }

  deleteAssignement(assignement: Assignement): Observable<string> {
    let pos = this.assignments.indexOf(assignement);
    this.assignments.splice(pos,1);

    return of("Assignement service : Assignement supprimé");
  }

  updateAssignement(assignement: Assignement):Observable<string> {
    assignement.rendu = true;
    return of("Assignement service : Assignement modifié");
  }


}
