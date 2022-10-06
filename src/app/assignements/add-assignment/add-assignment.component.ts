import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Assignement } from '../assignements.model';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {
  @Output() nouvelAssigment = new EventEmitter<Assignement>();
  nomDevoir:string = '';
  dateDeRendu!: Date;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    const newAssignement = new Assignement();
    newAssignement.nom = this.nomDevoir;
    newAssignement.dateDeRendu = this.dateDeRendu;
    newAssignement.rendu = false;

    //this.assignments.push(newAssignement);
    this.nouvelAssigment.emit(newAssignement);
  }

}
