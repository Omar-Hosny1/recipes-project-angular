import { Component, EventEmitter, Output, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css'],
})
export class AppHeader {
  @Output() theSowingSection = new EventEmitter<boolean>();
  constructor() {}
  onSelectedSection(value: boolean) {
    this.theSowingSection.emit(value);
  }
}
