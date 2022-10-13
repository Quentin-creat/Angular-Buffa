import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAssignmentComponent } from './assignements/add-assignment/add-assignment.component';
import { AssignementsComponent } from './assignements/assignements.component';

const routes: Routes = [
  { path: 'home', component: AssignementsComponent },
  { path: '', component: AssignementsComponent},
  { path: 'add', component: AddAssignmentComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }