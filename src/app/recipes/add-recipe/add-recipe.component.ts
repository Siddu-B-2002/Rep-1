import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrdersService } from 'src/app/services/orders.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})

export class AddRecipeComponent implements OnInit{
  addRecipeRequest: Recipe = {
    Id:'',
    Recipe:'',
    Amount: 0,
    Restaurant:'',
    City:''
  };

  constructor(private ordersService: OrdersService, private router:Router) {}
  ngOnInit(): void {
      
  }

  addRecipe()
  {
    this.ordersService.addRecipe(this.addRecipeRequest)
    .subscribe({
      next: (recipe) => {
        this.router.navigate(['RecipeOrders/orders']);
      }
    });
  }
}
