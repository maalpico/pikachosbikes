import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-slider',
  standalone: true,
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit, OnDestroy {

  @Input() images: string[] = [];

  active = 0;
  intervalId: any;
  isBrowser: boolean;

  // SWIPE
  startX = 0;
  currentX = 0;
  isDragging = false;
  readonly swipeThreshold = 60;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if (this.isBrowser && this.images.length > 1) {
      this.startAutoSlide();
    }
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.next();
    }, 3000);
  }

  stopAutoSlide() {
    clearInterval(this.intervalId);
  }

  next() {
    this.active = (this.active + 1) % this.images.length;
  }

  prev() {
    this.active =
      (this.active - 1 + this.images.length) % this.images.length;
  }

  goTo(index: number) {
    this.active = index;
  }

  // 👉 TOUCH EVENTS
  onTouchStart(e: TouchEvent) {
    this.startX = e.touches[0].clientX;
    this.isDragging = true;
    this.stopAutoSlide();
  }

  onTouchMove(e: TouchEvent) {
    if (!this.isDragging) return;
    this.currentX = e.touches[0].clientX;
  }

  onTouchEnd() {
    if (!this.isDragging) return;

    const delta = this.currentX - this.startX;

    if (Math.abs(delta) > this.swipeThreshold) {
      delta < 0 ? this.next() : this.prev();
    }

    this.isDragging = false;
    this.startAutoSlide();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
