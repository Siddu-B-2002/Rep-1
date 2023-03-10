import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }
  
  
  getAllOrders(): Observable<Recipe[]>
  {
    return this.http.get<Recipe[]>('https://localhost:7179/api/RecipeOrders');
  }

  addRecipe(addRecipeRequest: Recipe): Observable<Recipe>
  {
    addRecipeRequest.Id='00000000-0000-0000-0000-000000000000';
    return this.http.post<Recipe>('https://localhost:7179'+'/api/RecipeOrders', addRecipeRequest);
  }

  getOrder(Id: string): Observable<Recipe>
  {
    return this.http.get<Recipe>('https://localhost:7179/api/RecipeOrders/' + Id);
  }

  updateRecipe(Id: string, updateRecipeRequest: Recipe): Observable<Recipe>
  {
    return this.http.put<Recipe>('https://localhost:7179/api/RecipeOrders/' + Id, updateRecipeRequest);
  }

  deleteOrder(Id: string): Observable<Recipe>
  {
    return this.http.delete<Recipe>('https://localhost:7179/api/RecipeOrders/' + Id);
  }
}
