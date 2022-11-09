import { Injectable } from '@angular/core';
import { Assignement } from '../assignements/assignements.model';
import { Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  // assignments: Assignement[] = [{
  //   id:1,
  //   rendu: false,
  //   nom: "francais",
  //   dateDeRendu: new Date('2022-01-26')
  // },
  // {
  //   id:2,
  //   rendu: true,
  //   nom: "francais",
  //   dateDeRendu: new Date('2022-03-20')
  // },
  // {
  //   id:3,
  //   rendu: true,
  //   nom: "francais",
  //   dateDeRendu: new Date('2022-11-06')
  // },
  // {
  //   id:4,
  //   rendu: false,
  //   nom: "francais",
  //   dateDeRendu: new Date('2022-12-30')
  // }]
  url = 'http://localhost:8010/api/assignments';

  
  constructor(private loggingService: LoggingService, private http:HttpClient) { }

  getAssignements():Observable<Assignement[]> {
    return this.http.get<Assignement[]>(this.url);
  }

  addAssignement(assignement: Assignement): Observable<any> {
    return this.http.post<Assignement>(this.url, assignement);
  }

  deleteAssignement(assignement: Assignement): Observable<string> {
    return this.http.delete<string>(this.url + '/' + assignement._id);
  }

  updateAssignement(assignement: Assignement):Observable<any> {
    return this.http.put<Assignement>(this.url, assignement);
  }

  getAssignement(id):Observable<Assignement> {
    console.log('id service : ', id);
    return this.http.get<Assignement>(this.url + '/' + id);
  }

}
