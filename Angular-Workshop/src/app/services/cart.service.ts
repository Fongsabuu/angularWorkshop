import { Injectable } from '@angular/core';
import { Order } from "../order";
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private ordercart : Order[] =[ {
    id :"",
    ordername:"",
    orderprice : "",
    ordercart : 0
  }];
  private count = 1;
  constructor() { }
  
  addcart(ordercart : Order){
    this.ordercart.push(ordercart)
  }

  getOrdercart(): Observable<Order[]>{
    return of(this.ordercart)
  }
}
