import { Component, OnInit } from '@angular/core';
import { CartModel } from '../cart-model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    cart: CartModel;
    constructor( private cartService: CartService) { }
    ngOnInit() {
      this.cart = this.cartService.cart;
  }
}
