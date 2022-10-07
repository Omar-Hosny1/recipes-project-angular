import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[] = [
    new Ingredients('apple', 5),
    new Ingredients('orange', 15),
  ];
  constructor() {}

  ngOnInit(): void {}
  onAddIngredient(ingredientDetails: Ingredients) {
    this.ingredients.push(ingredientDetails);
    console.log(this.ingredients);
  }
}
