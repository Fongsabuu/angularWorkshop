import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { Order } from "../order";
import { CartService } from "../services/cart.service";

@Component({
  selector: 'app-order-selected',
  templateUrl: './order-selected.component.html',
  styleUrls: ['./order-selected.component.css']
})
export class OrderSelectedComponent implements OnInit {

  @Input() order: Order;
  private title : string = 'สินค้าที่เลือก';
  constructor(private cartservice : CartService) { }

  ngOnInit() {
  }
  addcart(){
    this.cartservice.addcart(this.order)
  }
}
