import { Component, OnInit } from '@angular/core';
import {SalesPerson} from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  salesPersonList: SalesPerson[] = [
    new SalesPerson("Jorge","Romero","jlrome",2500),
    new SalesPerson("Saul","Villa","jlrome",5500),
    new SalesPerson("Conde","Condezo","jlrome",10500)
  ]

  ngOnInit(){}

}
