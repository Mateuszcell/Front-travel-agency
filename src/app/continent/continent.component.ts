import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-continent',
  templateUrl: './continent.component.html',
  styleUrls: ['./continent.component.css']
})
export class ContinentComponent implements OnInit {
name:string="";

  conAdd(postData:{continent:string}){
   this.name=postData.continent
    this.http.post("http://localhost:8080/api/travel-agency/addContinent",{"name":this.name}).subscribe(
      responseDate=> {
        console.log(postData.continent);
      }
    )
    console.log(postData);
  }

  constructor(private  http: HttpClient) { }

  ngOnInit(): void {
  }

}
