import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: true }) nameInputContent: ElementRef;
  @ViewChild('amountInput', { static: true }) amountInputContent: ElementRef;
  constructor(private shopingListService: ShoppingListService) {}

  ngOnInit(): void {}
  onAddIngredient() {
    let nameInputVal = (<HTMLInputElement>this.nameInputContent.nativeElement)
      .value;
    let amountInputVal = (<HTMLInputElement>(
      this.amountInputContent.nativeElement
    )).value;
    let theAddedIng = new Ingredients(nameInputVal, +amountInputVal);
    this.shopingListService.onAddIngredient(theAddedIng);
  }
}
