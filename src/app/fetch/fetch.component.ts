import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.css']
})



export class FetchComponent implements OnInit {
  
  list=new Map();
  @Input() srchMedicine: string;
  @Output() operator: EventEmitter<string> = new EventEmitter<string>();
 
  
  constructor() { 
    
    this.list.set('pcm','10');
    this.list.set('disperin','20');
    this.list.set('crocin','30');
    this.list.set('dettol','40');
   
  }

  ngOnInit() {
    
  }
  send() {
  //   if (this.srchMedicine === 'PCM' ) {
   
  //     this.operator.emit('45');

  //   }

  //   else {

  //     this.operator.emit('Medicine Not Available');


  //   }
  // }
    let str = this.list.get(this.srchMedicine);
    str = "Available Quantity of "+this.srchMedicine+" : "+str;
      this.operator.emit(str)

  
    

  }

}
