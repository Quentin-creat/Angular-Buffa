import { Injectable } from '@angular/core';
import { Assignement } from '../assignements/assignements.model';
import { Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  assignments: Assignement[] = [{
    id:1,
    rendu: false,
    nom: "francais",
    dateDeRendu: new Date('2022-01-26')
  },
  {
    id:2,
    rendu: true,
    nom: "francais",
    dateDeRendu: new Date('2022-03-20')
  },
  {
    id:3,
    rendu: true,
    nom: "francais",
    dateDeRendu: new Date('2022-11-06')
  },
  {
    id:4,
    rendu: false,
    nom: "francais",
    dateDeRendu: new Date('2022-12-30')
  }]

  
  constructor(private loggingService: LoggingService) { }

  getAssignements():Observable<Assignement[]> {
    return of(this.assignments);
  }

  addAssignement(assignement: Assignement): Observable<string> {
    this.assignments.push(assignement);
    this.loggingService.log(assignement.nom, 'ajouté');
    return of("Assignement service : Assignement ajouté");
  }

  deleteAssignement(assignement: Assignement): Observable<string> {
    let pos = this.assignments.indexOf(assignement);
    this.assignments.splice(pos,1);

    this.loggingService.log(assignement.nom, 'supprimé');

    return of("Assignement service : Assignement supprimé");
  }

  updateAssignement(assignement: Assignement):Observable<string> {
    assignement.rendu = true;
    this.loggingService.log(assignement.nom, 'modifié');
    return of("Assignement service : Assignement modifié");
  }

  getAssignement(id):Observable<Assignement> {
    console.log('id service : ', id);
    return of(this.assignments.find(assignement => assignement.id === id))
  }

}
