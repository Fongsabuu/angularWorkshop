import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Order } from "../order";
import { OrderService } from "../services/order.service";


@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  private orders : Order[];
  private title : string =  'รายการสินค้า';
  @Output() orderselect: EventEmitter<Order> = new EventEmitter();

  constructor(private orderservices : OrderService) { }

  ngOnInit() {
    this.orderservices.getOrders().subscribe(result => {
      this.orders = result;
    })
  }

  orderselected(order : Order){
    this.orderselect.emit(order);
  }
}
