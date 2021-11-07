import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {DropdownDirective} from "./header/dropdown.directive";
import { SearchComponent } from './view/search/search.component';
import { FooterComponent } from './footer/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AddTravelComponent } from './add-travel/add-travel.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { LogInComponent } from './log-in/log-in.component';
import { ContinentComponent } from './continent/continent.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    SearchComponent,
    FooterComponent,
    HomeComponent,
    AddTravelComponent,
    LogInComponent,
    ContinentComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
      HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
