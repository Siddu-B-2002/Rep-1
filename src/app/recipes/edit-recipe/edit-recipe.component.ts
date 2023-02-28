import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdersService } from 'src/app/services/orders.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit{

    recipeInfo: Recipe = {
      Id:'',
      Recipe:'',
      Amount: 0,
      Restaurant:'',
      City:''
    };
    //recipeInfo:any;

    constructor(private route: ActivatedRoute, private ordersService: OrdersService, private router: Router)
    {

    }
    
    ngOnInit()
    {
      this.route.paramMap.subscribe({
        next: (params) => {
          const id = params.get('id');

          if (id)
          {
            this.ordersService.getOrder(id)
            .subscribe({
              next: (response) => {
                this.recipeInfo = response;
              }
            })
            // this.ordersService.getOrder(Id)
            //   .subscribe((res:any)=>{this.recipeInfo=res});
          }
        }
      })
    }

    updateOrder()
    {
      this.ordersService.updateRecipe(this.recipeInfo.Id, this.recipeInfo)
      .subscribe({
        next: (res) => {
          this.router.navigate(['RecipeOrders/orders']);
        }
      });
    }

    deleteOrder(id: string)
    {
      this.ordersService.deleteOrder(id)
      .subscribe({
        next: (res) => {
          this.router.navigate(['RecipeOrders/orders']);
        }
      });
    }
}