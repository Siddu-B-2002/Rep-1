import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit
{
    // ingredients: Ingredient[] = [
    //   new Ingredient('Sugar',2),
    //   new Ingredient('Corn Flour', 5),
    // ];
    recipes: Recipe[] = [];
    
    constructor(private ordersService: OrdersService)
    {
      
    }
    
    ngOnInit()
    {
      this.ordersService.getAllOrders()
      .subscribe({
        next: (recipes)=>{
          this.recipes = recipes;
        },
        error: (response)=> {
          console.log(response);
        }
      })
    }
}
