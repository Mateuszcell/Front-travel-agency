import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-continent',
  templateUrl: './continent.component.html',
  styleUrls: ['./continent.component.css']
})
export class ContinentComponent implements OnInit {
name:string="";
step: any = 0;
tab: string[] =[];
  conAdd(postData:{na:string}){
    if(this.step<4){
    this.step=this.step + 1;}
   this.name=postData.na
    this.tab.push(postData.na);
    // this.http.post("http://localhost:8080/api/travel-agency/addContinent",{"name":this.name}).subscribe(
    //   responseDate=> {
    //     console.log(postData);
    //   }
    // )
    console.log(postData);
    console.log(this.tab)
  }
sendData(){

}
onSelect(num:any){this.step=num}
  constructor(private service:HttpClient){
  }

  ngOnInit(): void {
  }

}
