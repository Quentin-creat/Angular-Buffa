import { Injectable } from '@angular/core';
import { Assignement } from '../assignements/assignements.model';
import { forkJoin, Observable, of } from 'rxjs';
import { LoggingService } from './logging.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { bdInitialAssignments } from './data';

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
  url = 'https://api-cours-angular2022-guillou.herokuapp.com/api/assignments';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }


  constructor(private loggingService: LoggingService, private http: HttpClient) { }

  getAssignements(): Observable<Assignement[]> {
    return this.http.get<Assignement[]>(this.url);
  }

  addAssignement(assignement: Assignement): Observable<any> {
    return this.http.post<Assignement>(this.url, assignement, this.httpOptions);
  }

  deleteAssignement(assignement: Assignement): Observable<string> {
    return this.http.delete<string>(this.url + '/' + assignement._id);
  }

  updateAssignement(assignement: Assignement): Observable<any> {
    return this.http.put<Assignement>(this.url, assignement);
  }

  getAssignement(id): Observable<Assignement> {
    console.log('id service : ', id);
    return this.http.get<Assignement>(this.url + '/' + id)
      .pipe(map(a => {
        a.nom += " transformé avec un pipe";
        return a;
      }),
        tap(a => console.log('tap assignement avec id : ', a.id)),
        catchError(this.handleError<any>('### catchError: getAssignments by id avec id=' + id))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(operation + 'a échoué : ' + error.message);
      return of(result as T);
    };
  }

  peuplerBDAvecForkJoin(): Observable<any> {
    const appelsVersAddAssignment: any = [];

    bdInitialAssignments.forEach((a) => {
      const nouvelAssignment: any = new Assignement();

      nouvelAssignment.id = a.id;
      nouvelAssignment.nom = a.nom;
      nouvelAssignment.dateDeRendu = new Date(a.dateDeRendu);
      nouvelAssignment.rendu = a.rendu;

      appelsVersAddAssignment.push(this.addAssignement(nouvelAssignment));
    });
    return forkJoin(appelsVersAddAssignment); // renvoie un seul Observable pour dire que c'est fini
  }

  getAssignmentsPagine(page: number, limit: number): Observable<any> {
    const queryParams = {
      page: page,
      limit: limit
    }
    return this.http.get<any>(this.url, { params: queryParams });
  }


}
