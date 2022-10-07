import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: true }) nameInputContent: ElementRef;
  @ViewChild('amountInput', { static: true }) amountInputContent: ElementRef;
  @Output() selectedIngredientDetails = new EventEmitter<Ingredients>();
  constructor() {}

  ngOnInit(): void {}
  onAddIngredient() {
    let nameInputVal = (<HTMLInputElement>this.nameInputContent.nativeElement)
      .value;
    let amountInputVal = (<HTMLInputElement>(
      this.amountInputContent.nativeElement
    )).value;
    this.selectedIngredientDetails.emit(
      new Ingredients(nameInputVal, +amountInputVal)
    );
  }
}
