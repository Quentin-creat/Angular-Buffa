import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { Assignement } from '../assignements.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {
  assignementTransmis: Assignement;

  constructor(private assignementService:AssignmentsService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.getAssignement()
  }

  delete() {
    this.assignementService.deleteAssignement(this.assignementTransmis).subscribe(message => {
      console.log(message);
    })
    this.assignementTransmis = null;
    this.router.navigate(['home']);
  }

  onAssignementRendu() {
    this.assignementService.updateAssignement(this.assignementTransmis).subscribe(message => {
      console.log(message);
    });
    this.router.navigate(['home']);
  }

  getAssignement() {
    const id = +this.route.snapshot.params['id'];
    console.log('id : ', id);
    this.assignementService.getAssignement(id).subscribe(assignement => {
      this.assignementTransmis = assignement
      console.log( "Res ass detail ",assignement);
    })
  }

}
