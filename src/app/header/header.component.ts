import {Component, EventEmitter, OnInit, Output} from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
@Output() emiter= new EventEmitter<string>();

onSelect(id:string){
this.emiter.emit(id);
}
  constructor() { }

  ngOnInit(): void {
  }

}
