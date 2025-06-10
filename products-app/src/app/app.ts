import { Component } from '@angular/core';
import { Product } from './Models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected title = 'products-app';
   products: Product[] = [{
     name: 'Wireless Earbuds, IPX8',
      price: 89,
      image:  'assets/istockphoto-172867703-612x612.jpg',
      rate: 4,
      stock: 1

   },
    {
      name: 'AirPods Max',
      price: 559,
      image: 'assets/istockphoto-172867703-612x612.jpg',
      rate: 5,
      stock: 0
    },
    {
      name: 'Bose BT Earphones',
      price: 289,
      image: 'assets/istockphoto-172867703-612x612.jpg',
      rate: 4,
      stock: 0
    },
    {
      name: 'VIVEFOX Headphones',
      price: 39,
      image: 'assets/photo-1505740420928-5e560c06d30e.jpg',
      rate: 5,
      stock: 3
    },
     {
      name: 'VIVEFOX Headphones',
      price: 39,
      image: 'assets/photo-1505740420928-5e560c06d30e.jpg',
      rate: 5,
      stock: 3
    }
    ,
    {
      name: 'VIVEFOX Headphones',
      price: 39,
      image: 'assets/photo-1505740420928-5e560c06d30e.jpg',
      rate: 5,
      stock: 3
    },
    {
      name: 'VIVEFOX Headphones',
      price: 39,
      image: 'assets/photo-1505740420928-5e560c06d30e.jpg',
      rate: 5,
      stock: 3
    },
    {
      name: 'VIVEFOX Headphones',
      price: 39,
      image: 'assets/photo-1505740420928-5e560c06d30e.jpg',
      rate: 5,
      stock: 3
    }
    
  
  ]
}
