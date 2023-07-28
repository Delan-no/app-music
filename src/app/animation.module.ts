// import { Component } from '@angular/core';
import { trigger, style, animate, transition, } from "@angular/animations";

export const fadeInAnimation = trigger('fadeInAnimation', [
    transition(':enter', [
      style({opacity: 0}),
      animate('4000ms', style({opacity: 1})),
    ]),
  ])