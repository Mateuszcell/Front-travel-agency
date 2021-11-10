import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
@Injectable()
export class httpService{
  private continet: string[]=[];


  constructor(private http: HttpClient) {
  }
  getCont(){
return this.continet=['Afryk','Ameryka Polnocna','Azja'
      ,'Europa','Antarktyda','Australia','Ameryka Poludniowa'];// pobierane z bazy potem
}}
