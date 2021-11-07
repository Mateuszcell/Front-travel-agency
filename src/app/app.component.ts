
import {Component, OnInit} from '@angular/core';
import {newTravel} from "./models/travel.model";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  travels: newTravel[]=[
    new newTravel("Wycieczka fasas fasfsaf",1000,'rabaras','https://i.content4travel.com/cms/img/u/kraj/1/malediwy_0.jpg?version=15'),
    new newTravel("Wycieczka fasas fasfsaf",1000,'Malediwy','https://i.content4travel.com/cms/img/u/kraj/1/malediwy_0.jpg?version=15'),
    new newTravel("Wycieczka fasas fasfsaf",1000,'Batman','https://www.sunfun.pl/images/content/country/grecja.jpg'),
  ];

  trav:newTravel=this.travels[1];

  title = 'Front-travel-agency';
  future = 'home';
change(){
  {
    setTimeout(()=> {
      for (let i = 0; i <= 2; i++)
      this.trav = this.travels[i]
    }, 7000);
  }
}



  navigate(id:string){
this.future=id;
  }

  ngOnInit(): void {
  this.change();
  }
}
