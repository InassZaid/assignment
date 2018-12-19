import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServicesService {

  rowsOfData =[
    {"id": 1 , "title": 'HR' , "description": 'I am an employee in hr department'},
    {"id": 2 , "title": 'Managment' , "description": 'I am an employee in Managment department'}
  ]

  constructor() { }
}
