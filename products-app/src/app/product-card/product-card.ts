import { Component, Input } from '@angular/core';
import { Product } from '../Models/product.model';
import { CartService } from '../Models/cart.service';

@Component({
  selector: 'app-product-card',
  standalone: false,
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {
  @Input() product!: Product;
  constructor(private cartService: CartService) {}

addToCart() {
  this.cartService.addToCart(this.product);
}
}
