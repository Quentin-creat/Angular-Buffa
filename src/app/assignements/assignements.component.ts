import { Component, OnInit } from '@angular/core';
import { AssignmentsService } from '../shared/assignments.service';
import { Assignement } from './assignements.model';

@Component({
  selector: 'app-assignements',
  templateUrl: './assignements.component.html',
  styleUrls: ['./assignements.component.css']
})
export class AssignementsComponent implements OnInit {
  assignments!: Assignement[];
  ajoutActive = false;
  nomDevoir: string = '';
  dateDeRendu!: Date;
  assignementSelectionne!: Assignement;
  formVisible = false;

  constructor(private assignementsService: AssignmentsService) { }

  ngOnInit(): void {
    this.assignementsService.getAssignements().subscribe(assignments => {
      this.assignments = assignments
    })
  }

  assignmentClique(assignment: Assignement) {
    this.assignementSelectionne = assignment;
  }

  onAddAssignementBtnClick() {
    this.formVisible = true;
  }
}
