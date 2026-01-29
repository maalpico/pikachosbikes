import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isOpen = false;
  private isBrowser: boolean;
  private lastScroll = 0;
  isScrolled = false;
  isHidden = false;
 
  @HostListener('window:scroll')
  onScroll() {
     if (!this.isBrowser) return;
     const currentScroll = window.scrollY;

    this.isScrolled = window.scrollY > 10;

     if (currentScroll > this.lastScroll && currentScroll > 80) {
        this.isHidden = true;
      } 
      // Subiendo → mostrar
      else {
        this.isHidden = false;
      }

      this.lastScroll = currentScroll;
  }
  
  constructor(private router: Router, @Inject(PLATFORM_ID) platformId: Object) {
      this.isBrowser = isPlatformBrowser(platformId);
      this.router.events.subscribe(() => this.close());
  }

  toggle() {
    this.isOpen = !this.isOpen;
    this.toggleScroll();
  }

  close() {
    this.isOpen = false;
    this.toggleScroll();
  }

  private toggleScroll() {
    if (!this.isBrowser) return;
    document.body.style.overflow = this.isOpen ? 'hidden' : '';
  }
}
