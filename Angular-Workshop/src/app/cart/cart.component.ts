import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../order';
import { CartService } from "../services/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  private cart: Order[];
  private test : boolean = false;
  constructor(private cartservice :CartService) { }

  ngOnInit() {
    this.test = false;
    this.cartservice.getOrdercart().subscribe(result =>{
      this.cart = result
      this.test = true
    })
  }

}
