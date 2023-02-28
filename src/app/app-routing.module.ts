import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddRecipeComponent } from './recipes/add-recipe/add-recipe.component';
import { EditRecipeComponent } from "./recipes/edit-recipe/edit-recipe.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const appRoute: Routes = [
    {
        path: 'RecipeOrders/add',
        component: AddRecipeComponent
    },
    {
        path: 'RecipeOrders/orders',
        component: ShoppingListComponent
    },
    {
        path: 'RecipeOrders/edit/:Id',
        component: EditRecipeComponent
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