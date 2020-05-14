import { Directive, HostBinding, HostListener } from '@angular/core';
import { getCurrencySymbol } from '@angular/common';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {


  tableau = [
    'blue',
    'lightblue',
    'red',
    'green',
    'grey',
    'coral',
    'lightgreen',
    'gold',
    'lightgrey',
    'yellow',
    'pink',
    'purple'
  ]
  @HostBinding('style.borderColor') bc ;
  @HostBinding('style.color') sc;

  constructor() { }

  @HostListener('keypress') changeColor(){
    const index =  Math.floor(Math.random() * (this.tableau.length -1));
    this.bc=this.tableau[index];
    this.sc=this.tableau[index];
  }


}
