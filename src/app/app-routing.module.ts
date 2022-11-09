import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAssignmentComponent } from './assignements/add-assignment/add-assignment.component';
import { AssignementsComponent } from './assignements/assignements.component';
import { AssignmentDetailComponent } from './assignements/assignment-detail/assignment-detail.component';
import { EditAssignmentComponent } from './assignements/edit-assignment/edit-assignment.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  { path: 'home', component: AssignementsComponent},
  { path: '', component: AssignementsComponent},
  { path: 'add', component: AddAssignmentComponent },
  { path: 'assignement/:id', component: AssignmentDetailComponent},
  { path: 'assignement/:id/edit', component: EditAssignmentComponent, canActivate: [AuthGuard] },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }