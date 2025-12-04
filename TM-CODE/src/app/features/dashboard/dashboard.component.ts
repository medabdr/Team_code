// src/app/features/dashboard/dashboard.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';

// Importez vos composants (ajustez les chemins selon votre structure)
import { HeaderComponent } from '../../shared/components/header/header.component';
import { CardsComponent } from '../../shared/components/cards/cards.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { SearchbarComponent } from '../../shared/components/searchbar/searchbar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,    
    CardsComponent,     
    ButtonComponent,    
    SearchbarComponent  
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  
  constructor(
    public authService: AuthService,
    private router: Router
  ) {}

  get currentUser() {
    return this.authService.currentUser;
  }

  logout() {
    this.authService.logout();
  }
}
