import { Component, OnInit } from '@angular/core';
import {DataServicesService} from '../data-services.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit {
  
  constructor(private service :DataServicesService, private route : Router) {

   }
   data=this.service.rowsOfData;
  ngOnInit() {
    console.log(this.service.rowsOfData);
  }
  
  onSelect(dl){
     this.route.navigate(['/data',dl.id]);
      //this.route.navigate(['/data',dl.title]);
  }
}
