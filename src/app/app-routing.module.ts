import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddRecipeComponent } from './recipes/add-recipe/add-recipe.component';
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const appRoute: Routes = [
    {
        path: 'RecipeOrders/add',
        component: AddRecipeComponent
    },
    {
        path: 'orders',
        component: ShoppingListComponent
    }
];

@NgModule
({
    imports:[
        RouterModule.forRoot(appRoute)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{

}