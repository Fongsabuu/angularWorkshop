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
  constructor() { }
  
  addcart(ordercart : Order){
    
    this.ordercart.push(JSON.parse(JSON.stringify(ordercart)));
  }

  getOrdercart(): Observable<Order[]>{
    return of(this.ordercart)
  }
}
