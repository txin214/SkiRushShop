import { Component} from '@angular/core';
import { CartItem } from '../shared/models/cart';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent{

  constructor(public cartService: CartService) { }

  incrementQuantity(item: CartItem) {
    this.cartService.addItemToCart(item);
  }

  removeItem(id: number, quantity: number) {
    this.cartService.removeItemFromCart(id, quantity);
  }
}
