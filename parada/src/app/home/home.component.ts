import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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
