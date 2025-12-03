import { Component, HostListener } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  // Fermer si on clique en dehors
  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    const target = event.target as HTMLElement;

    if (!target.closest('.left')) {
      this.menuOpen = false;
    }
  }
}