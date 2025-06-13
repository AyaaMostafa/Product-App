import { Component, OnInit  } from '@angular/core';
import { CartService } from '../Models/cart.service';
import { CartItem } from '../Models/cart-item.model';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart implements OnInit {
  cartItems: CartItem[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
  }

  increaseQuantity(id: number): void {
    this.cartService.updateQuantity(id, 1);
    this.refresh();
  }

  decreaseQuantity(id: number): void {
    this.cartService.updateQuantity(id, -1);
    this.refresh();
  }

  removeItem(id: number): void {
    this.cartService.removeFromCart(id);
    this.refresh();
  }

  getTotal(): number {
    return this.cartService.getTotal();
  }

  refresh() {
    this.cartItems = this.cartService.getItems();
  }

}
