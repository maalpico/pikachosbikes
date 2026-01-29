import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface SlideItem {
  url: string;
  text: string;
  link: string;
}

@Component({
  selector: 'app-slider-horizontal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider-horizontal.component.html',
  styleUrls: ['./slider-horizontal.component.css']
})
export class SliderHorizontalComponent {
  @Input() slides: SlideItem[] = [];
 
}
