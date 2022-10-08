import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appDorpdown]',
})
export class DorpdownDirective implements OnInit {
  @HostBinding('class.open') isOpen: boolean = false;

  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {}

  @HostListener('click') click(event: Event) {
    this.isOpen = !this.isOpen;
  }
}
