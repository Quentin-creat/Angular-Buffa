import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  log(assignementName, action) {
    console.log('Assignement ', assignementName, '', action);
  }
}
