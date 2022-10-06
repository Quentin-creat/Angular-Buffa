import { Component, OnInit } from '@angular/core';
import { Assignement } from './assignements.model';

@Component({
  selector: 'app-assignements',
  templateUrl: './assignements.component.html',
  styleUrls: ['./assignements.component.css']
})
export class AssignementsComponent implements OnInit {
  nomProf: string = "Quentin wé";
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
  ajoutActive = false;
  nomDevoir: string = '';
  dateDeRendu!: Date;
  assignementSelectionne!: Assignement;
  formVisible = false;

  constructor() { }

  ngOnInit(): void {
  }

  assignmentClique(assignment: Assignement) {
    this.assignementSelectionne = assignment;
  }

  onAddAssignementBtnClick() {
    this.formVisible = true;
  }

  onNouvelAssignement(event: Assignement) {
    this.assignments.push(event);
    this.formVisible = false;
  }

  onDeleteAssignement(event: Assignement) {
    for (let i = 0; i < this.assignments.length; i++) {
      if (this.assignments[i] === event) {
        this.assignments.splice(i, 1);
        this.assignementSelectionne = this.assignments[i-1];
      }
    }
  }

}
