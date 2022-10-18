import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertComponent } from './alert/alert.component';
import { DropdownDirective } from './dropdown.directive';
import { PlaceHolderDirective } from './place-holder/place-holder.directive';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    AlertComponent,
    SpinnerComponent,
    PlaceHolderDirective,
    DropdownDirective,
  ],
  imports: [CommonModule],
  exports: [
    AlertComponent,
    SpinnerComponent,
    PlaceHolderDirective,
    DropdownDirective,
    CommonModule,
  ],
})
export class SharedModule {}
