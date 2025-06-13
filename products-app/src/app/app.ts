import { Component, OnInit } from '@angular/core';
import { Product } from './Models/product.model';
import { ProductService } from './Models/product.service';
import { CartService } from './Models/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected title = 'products-app';
  products: Product[] = [];
cartCount: number = 0;

constructor(private productService: ProductService, private cartService: CartService) {}

ngOnInit(): void {
  this.productService.getProducts().subscribe({
    next: (data) => this.products = data
  });

  this.cartService.cart$.subscribe(items => {
    this.cartCount = items.reduce((acc, item) => acc + item.quantity, 0);
  });
}
}

