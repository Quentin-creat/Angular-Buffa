import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAssignmentComponent } from './assignements/add-assignment/add-assignment.component';
import { AssignementsComponent } from './assignements/assignements.component';
import { AssignmentDetailComponent } from './assignements/assignment-detail/assignment-detail.component';

const routes: Routes = [
  { path: 'home', component: AssignementsComponent },
  { path: '', component: AssignementsComponent},
  { path: 'add', component: AddAssignmentComponent },
  { path: 'assignement/:id', component: AssignmentDetailComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }