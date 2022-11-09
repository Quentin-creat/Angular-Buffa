import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { Assignement } from '../assignements.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {
  nomDevoir: string = '';
  dateDeRendu!: Date;

  constructor(private assignementService: AssignmentsService, private router:Router) { }

  ngOnInit(): void {
    console.log('add assignement');
  }

  onSubmit() {
    const newAssignement = new Assignement();
    newAssignement.nom = this.nomDevoir;
    newAssignement.id = Math.floor(Math.random() * 1000);
    newAssignement.dateDeRendu = this.dateDeRendu;
    newAssignement.rendu = false;

    this.assignementService.addAssignement(newAssignement).subscribe(message => {
      console.log(message);
    })
    this.router.navigate(['home']);
  }

}
