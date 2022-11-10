import { Component, OnInit, Injectable, NgModule } from '@angular/core';
import { AssignmentsService } from '../shared/assignments.service';
import { Assignement } from './assignements.model';
import { Router } from '@angular/router';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import {Subject} from 'rxjs';

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
  page: number = 1;
  limit: number = 10;
  totalDocs: number;
  totalPages: number;
  hasPrevPage: boolean;
  prevPage: number;
  hasNextPage: boolean;
  nextPage: number;



  constructor(private assignementsService: AssignmentsService, private router: Router) { }

  ngOnInit(): void {
    this.assignementsService.getAssignmentsPagine(this.page, this.limit)
      .subscribe(data => {
        this.assignments = data.docs;
        this.page = data.page;
        this.limit = data.limit;
        this.totalDocs = data.totalDocs;
        this.totalPages = data.totalPages;
        this.hasPrevPage = data.hasPrevPage;
        this.prevPage = data.prevPage;
        this.hasNextPage = data.hasNextPage;
        this.nextPage = data.nextPage;
        console.log("données reçues");
      });

  }

  assignmentClique(assignment: Assignement) {
    this.assignementSelectionne = assignment;
  }

  onAddAssignementBtnClick() {
    this.formVisible = true;
  }

  // dans le composant principal
  peuplerBD() {
    // version naive et simple
    //this.assignmentsService.peuplerBD();

    // meilleure version :
    this.assignementsService.peuplerBDAvecForkJoin()
      .subscribe(() => {
        console.log("LA BD A ETE PEUPLEE, TOUS LES ASSIGNMENTS AJOUTES, ON RE - AFFICHE LA LISTE");
        // replaceUrl = true = force le refresh, même si
        // on est déjà sur la page d’accueil
        // Marche plus avec la dernière version d’angular
        this.router.navigate(["/home"], { replaceUrl: true });
      })
  }

  getDataByPage(page: number, limit: number) {
    this.assignementsService.getAssignmentsPagine(page, limit)
      .subscribe(data => {
        this.assignments = data.docs;
        this.page = data.page;
        this.limit = data.limit;
        this.totalDocs = data.totalDocs;
        this.totalPages = data.totalPages;
        this.hasPrevPage = data.hasPrevPage;
        this.prevPage = data.prevPage;
        this.hasNextPage = data.hasNextPage;
        this.nextPage = data.nextPage;
      });
  }
  
  updatePage(event: any) {
    this.getDataByPage(event.pageIndex + 1, event.pageSize);
  }
}
