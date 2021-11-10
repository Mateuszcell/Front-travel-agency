import { Component, OnInit } from '@angular/core';
import {httpService} from "../continent/http.service";

@Component({
  selector: 'app-add-tour',
  templateUrl: './add-tour.component.html',
  styleUrls: ['./add-tour.component.css']
})
export class AddTourComponent implements OnInit {
tab:string[]=[];
  constructor(private http:httpService) {
  this.tab=this.http.getCont();}


  ngOnInit(): void {

  }

}
