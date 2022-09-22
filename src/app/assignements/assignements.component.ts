import { Component, OnInit } from '@angular/core';
import { Assignement } from './assignements.model';

@Component({
  selector: 'app-assignements',
  templateUrl: './assignements.component.html',
  styleUrls: ['./assignements.component.css']
})
export class AssignementsComponent implements OnInit {

  nomProf: string = "Quentin wé";
  assignments:Assignement[] = [{
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
  ajoutActive = false;
  nomDevoir:string = '';
  dateDeRendu!: Date;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.ajoutActive = true;
    }, 2000);
  }

  onSubmit() {
    const newAssignement = new Assignement();
    newAssignement.nom = this.nomDevoir;
    newAssignement.dateDeRendu = this.dateDeRendu;
    newAssignement.rendu = false;

    this.assignments.push(newAssignement);
  }

}
