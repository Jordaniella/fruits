import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  allProducts: any[] = [
    {
      name: 'fraise',
      images: ['assets/images/fraise1', 'assets/images/fraise2'],
    },
    {
      name: 'banane',
      images: ['assets/images/banane1', 'assets/images/banane2'],
    },
    { name: 'mure', images: ['assets/images/mure1', 'assets/images/mure2'] },
  ];
}
