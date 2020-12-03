import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrudService } from './crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: ''
  events:any = [];
  constructor(private crudService:CrudService, private httpClient:HttpClient){}
  ngOnInit(): void {
    this.getPhotos();
  }
  
  getPhotos(){
    this.crudService.getAllPhotos().subscribe(result=>{
        this.events = result
        console.log(this.events)
    })
  }

  
}


