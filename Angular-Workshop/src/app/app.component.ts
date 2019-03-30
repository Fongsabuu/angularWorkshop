import { Component, OnInit } from '@angular/core';
import { Order } from "./order";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private title : string = "My-WorkShop"
  private orderselect : Order;
  ngOnInit(): void {
    
  }

  orderselected(result : any){
    this.orderselect = result;
  }

}
