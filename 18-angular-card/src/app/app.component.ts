import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface Product{
  index: number
  product_name: string,
  product_price: number,
  product_description: string
}

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '18-angular-card';
  
  cart: Product[] = [];
  
  products: Product[] = [
    {index:0, product_name:'Apple',product_price:50,product_description:'Fresh Apple'},
    {index:1, product_name:'Mango',product_price:40,product_description:'Fresh Mango'},
    {index:2, product_name:'Banana',product_price:30,product_description:'Fresh Banana'},
  
  ]
  total_cost = 0
  
   addToCart(index:number)
  {
    this.cart.push(this.products[index])
    this.total_cost += this.products[index].product_price
  }
  
  removeFromCart(index:number)
  {
    this.total_cost -= this.cart[index].product_price
    this.cart.splice(index,1)
  }

}

