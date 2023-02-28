import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit
{
    
    recipes:any;
    baseURL : 'https://localhost:7179/api/RecipeOrders';
    
    constructor(private ordersService: OrdersService,private http: HttpClient)
    {
    }
    
    ngOnInit()
    {
      this.ordersService.getAllOrders()
      .subscribe((res:any)=>{this.recipes=res});
      // this.http.get(this.baseURL)
      // .subscribe({
      //   next: (recipe)=>{
      //     this.recipes = recipe;
      //     this.temp=true;
          
      //   },
        
      //   error: (response)=> {
      //     console.log(response);
      //   }
        
      // })
    }
}