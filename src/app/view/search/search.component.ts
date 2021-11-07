import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  getIt(continent: string) {
    this.http.get('https://travel-agency-1530a-default-rtdb.europe-west1.firebasedatabase.app/posts.json')
      .pipe()
      .subscribe(

    )
    console.log(continent);
  }

  ngOnInit(): void {
  }

}
