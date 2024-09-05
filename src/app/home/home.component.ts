import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, NgClass],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy{
  index: number = 0;
  x: any;
  currentProduct: IProduct = {
    name:"fraise",
    images:['assets/images/fraise1.png', 'assets/images/fraise2.webp','assets/images/fraise3.webp']
  }
  allProducts: IProduct[] = [
    {
      name: 'fraise',
      images:['assets/images/fraise1.png', 'assets/images/fraise2.webp','assets/images/fraise3.webp'],
    },
    {
      name: 'banane',
      images: ['assets/images/banane1.png', 'assets/images/banane2.png','assets/images/banane3.png'],
    },
    { name: 'raisin', images: ['assets/images/raisin1.png','assets/images/raisin2.png', 'assets/images/raisin3.png'] },
  ];
  changeProducts = (name:string) => {
    this.allProducts.forEach((element, index) => {
      if (element.name == name) {
        this.currentProduct = element
        this.index = index
      }  
    });
  }
  ngOnInit(): void {
    // this.x = setInterval(() => {
    //   if (this.index == 3) this.index = 0
    //   this.currentProduct = this.allProducts[this.index++]
    // }, 5000)
  }
  ngOnDestroy(): void {
    clearInterval(this.x)
  }
}
interface IProduct {
  name: string;
  images: string[];
}