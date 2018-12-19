import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataServicesService} from '../data-services.service';
import { from } from 'rxjs';
import { stringify } from '@angular/core/src/util';

@Component({
  selector: 'app-data-list-details',
  templateUrl: './data-list-details.component.html',
  styleUrls: ['./data-list-details.component.css']
})



export class DataListDetailsComponent implements OnInit {
 

  
  //public dataTitle;

  constructor(private service :DataServicesService,private rote : ActivatedRoute) { }
   
  dataa=this.service.rowsOfData;
   Id;
   detailsTitle = this.detailsTitle;
   detailsDesc = this.detailsDesc;

  ngOnInit() {
    if(this.rote.snapshot.paramMap.get('id') != null){
    this.Id= parseInt(this.rote.snapshot.paramMap.get('id'));
    for(const i of this.dataa)
    {
      if(i.id == this.Id){
        this.detailsTitle = i.title;
        this.detailsDesc = i.description;
      }
    }

  }
    //if(this.rote.snapshot.paramMap.get('id') != null)
    //{
      
    //}
    
    //let title= this.rote.snapshot.paramMap.get('title');
    //this.dataTitle= title;

   
  }



}
