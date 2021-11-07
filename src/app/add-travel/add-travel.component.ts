import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-add-travel',
  templateUrl: './add-travel.component.html',
  styleUrls: ['./add-travel.component.css']
})
export class AddTravelComponent implements OnInit {
  loadedPosts = [];

  constructor(private  http: HttpClient ) {}

  ngOnInit() {}

  onCreatePost(postData: { title: string; continent: string, content: string }) {
    this.http.post('https://travel-agency-1530a-default-rtdb.europe-west1.firebasedatabase.app/posts.json',postData).subscribe(
      responseDate=> {
        console.log(responseDate);
      }
    )
    console.log(postData);
  }

  onFetchPosts() {
    // Send Http request
  }

  onClearPosts() {
    // Send Http request
  }
}
