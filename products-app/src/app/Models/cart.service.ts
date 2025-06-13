import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from './cart-item.model';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items: CartItem[] = [];
  private cart = new BehaviorSubject<CartItem[]>([]);

  cart$ = this.cart.asObservable();

  getItems(): CartItem[] {
    return this.items;
  }

  addToCart(product: Product): void {
    const existingItem = this.items.find(i => i.product.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.items.push({ product, quantity: 1 });
    }
    this.cart.next(this.items);
  }

  removeFromCart(productId: number): void {
    this.items = this.items.filter(i => i.product.id !== productId);
    this.cart.next(this.items);
  }

  updateQuantity(productId: number, amount: number): void {
    const item = this.items.find(i => i.product.id === productId);
    if (item) {
      item.quantity += amount;
      if (item.quantity <= 0) {
        this.removeFromCart(productId);
      }
      this.cart.next(this.items);
    }
  }

  getTotal(): number {
    return this.items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  }

  getCount(): number {
    return this.items.reduce((acc, item) => acc + item.quantity, 0);
  }

  clearCart(): void {
    this.items = [];
    this.cart.next(this.items);
  }
}
