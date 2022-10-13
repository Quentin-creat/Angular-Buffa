import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { Assignement } from '../assignements.model';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {
  nomDevoir: string = '';
  dateDeRendu!: Date;

  constructor(private assignementService: AssignmentsService) { }

  ngOnInit(): void {
    console.log('add assignement');
  }

  onSubmit() {
    const newAssignement = new Assignement();
    newAssignement.nom = this.nomDevoir;
    newAssignement.dateDeRendu = this.dateDeRendu;
    newAssignement.rendu = false;

    this.assignementService.addAssignement(newAssignement).subscribe(message => {
      console.log(message);
    })
  }

}
