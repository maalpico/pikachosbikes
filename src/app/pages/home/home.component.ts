

import { SliderHorizontalComponent } from '../../shared/slider-horizontal/slider-horizontal.component';
import { Component  } from '@angular/core';
import { SliderComponent } from '../../shared/slider/slider.component';

import { CommonModule } from '@angular/common';
export interface SlideItem {
  url: string;
  text: string;
  link: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderHorizontalComponent,SliderComponent,CommonModule],
 templateUrl: './home.component.html',
 styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  slides: SlideItem[] = [];
  images = [
    '/assets/images/slider/slide1.jpg',
    '/assets/images/slider/slide2.jpg',
    '/assets/images/slider/slide3.jpg',
    '/assets/images/slider/slide4.jpg',
    ];

      categories = [
  { name: 'Cascos', img: '/assets/images/cat/cascos.jpg' },
  { name: 'Asientos', img: '/assets/images/cat/asientos.jpg' },
  { name: 'Componentes', img: '/assets/images/cat/componentes.jpg' },
  { name: 'Garmin', img: '/assets/images/cat/garmin.jpg' },
  { name: 'Grips', img: '/assets/images/cat/grips.jpg' },
  { name: 'Ilumunacion', img: '/assets/images/cat/iluminacion.jpg' },
  { name: 'Jerseys', img: '/assets/images/cat/jerseys.jpg' },
  { name: 'Llantas', img: '/assets/images/cat/llantas.jpg' },
  { name: 'Lentes', img: '/assets/images/cat/lentes.jpg' },
];
  isBrowser = false;
  showSlider = false;
  constructor() {
    
    

    

 
  this.slides = [{ url: '/assets/images/slideh/1.jpg', text: 'Tarmac SLB PRO 🚀 ', link: '/productos/1' },
    { url: '/assets/images/slideh/2.jpg', text: 'Epic 8 Comp 2026🔥', link: '/productos/2' },
    { url: '/assets/images/slideh/3.jpg', text: 'Turbo Levo 4 Alloy⚡️', link: '/productos/3' },
    { url: '/assets/images/slideh/4.jpg', text: 'Riprock 2026 🧒👧', link: '/productos/3' },
  { url: '/assets/images/slideh/5.jpg', text: 'Diverge 4 Expert 🚵‍♀️', link: '/productos/1' }]
  }


  
}
