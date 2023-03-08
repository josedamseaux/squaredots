import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PixelserviceService {

  constructor() { }

  titulos = [
    {
      nombre: 'Sulfur potion',
      img: "assets/imgs/1.jpg"
    },
    {
      nombre: "Lantern",
      img: "assets/imgs/2.jpg"
    },
    {
      nombre: "Store front",
      img: "assets/imgs/3.jpg"
    },
    {
      nombre: "Ferret",
      img: "assets/imgs/5.jpg"
    },
    {
      nombre: "Space",
      img: "assets/imgs/6.jpg"
    },
    {
      nombre: "Towel",
      img: "assets/imgs/7.jpg"
    },
    {
      nombre: "Prince of all cosmos",
      img: "assets/imgs/8.jpg"
    },
    {
      nombre: "My old room a long time ago.",
      img: "assets/imgs/9.jpg"
    },
    {
      nombre: "Owl",
      img: "assets/imgs/11.jpg"
    },
    {
      nombre: "Building",
      img: "assets/imgs/13.jpg"
    },
    {
      nombre: "Another building",
      img: "assets/imgs/14.jpg"
    },
    {
      nombre: "Angery hell cat",
      img: "assets/imgs/15.jpg"
    },
    {
      nombre: "Train station",
      img: "assets/imgs/16.jpg"
    },
    {
      nombre: "Illuminati",
      img: "assets/imgs/17.jpg"
    },
    {
      nombre: "A fishing place",
      img: "assets/imgs/19.jpg"
    }
  ];

  butterflies = [
    {
      nombre: 'PT1',
      img: "assets/imgs/BT1.jpg"
     },
    {
      nombre: "PT2",
      img: "assets/imgs/BT2.jpg"
    },
    {
      nombre: "PT3",
      img: "assets/imgs/BT3.jpg"
    },
  ];


  getTitulos(){
    return this.titulos;
  }

  getTitulo(idx: number){
    return this.titulos[idx];
  }

  getButterflies(){
    return this.butterflies;
  }

  getButterfly(idx){
    return this.butterflies[idx];
  }

}


export interface Pixel{
  nombre: string;
  img: string;
  idx?: number;
}