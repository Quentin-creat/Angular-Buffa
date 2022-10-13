import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { Assignement } from '../assignements.model';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {
  @Input() assignementTransmis!: Assignement;
  @Output() nouvelAssigment = new EventEmitter<Assignement>();

  constructor(private assignementService:AssignmentsService) { }

  ngOnInit(): void {
  }

  delete() {
    this.assignementService.deleteAssignement(this.assignementTransmis).subscribe(message => {
      console.log(message);
    })
    this.assignementTransmis = null;
  }

  onAssignementRendu() {
    this.assignementService.updateAssignement(this.assignementTransmis).subscribe(message => {
      console.log(message);
    });
  }

}
