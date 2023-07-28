import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, } from "@angular/animations";
import { fadeInAnimation } from '../animation.module';
import { Observable, Observer } from 'rxjs';


@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.css'],
  animations:[
    trigger('openClose', [
      state("open",style({
        border: '5px solid green'
      })),
      state("close",style({
        border: '5px solid red'
      })),
      transition('open => close', animate('1.5s')),
      transition('close => open', animate('1.5s')),
    ]),fadeInAnimation
  ]
})
export class OpenCloseComponent implements OnInit {
  ngOnInit(): void {
    // on s'abonne à l'observable
    this.myObservable.subscribe((album) => {
      console.log(album);
      
    })
  }

  // Observable: produit | objet | message qui sera diffusé
  // Observer: l'élément qui souscrit pour un produit | objet | message donné

  //new Observable ((observer) => {})
  myObservable = new Observable((observer: Observer<string>) => {
      // le code à exécuter quand on récupère la donnée
      setTimeout(() => {observer.next("album1")}, 1000);
      setTimeout(() => {observer.next("album2")}, 2000);
      setTimeout(() => {observer.next("album3")}, 3000);
      setTimeout(() => {observer.next("album4")}, 4000);
      setTimeout(() => {observer.next("album5")}, 5000);
     

      
  });

  isOpen : boolean = true;
   toggle(){
    this.isOpen = !this.isOpen;
   }
}

