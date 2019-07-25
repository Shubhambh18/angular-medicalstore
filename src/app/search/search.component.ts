import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  medicineName:string;
  response:string;
  constructor() { }

  ngOnInit() {
  }

  onChange(val){
    this.response=val;
  }
}
