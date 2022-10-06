import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';
import { Assignement } from '../assignements.model';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {
  @Input() assignementTransmis!: Assignement;
  @Output() nouvelAssigment = new EventEmitter<Assignement>();
  @Output() output = new EventEmitter<Assignement>();

  constructor() { }

  ngOnInit(): void {
  }

  delete() {
    this.output.emit(this.assignementTransmis);
  }

}
