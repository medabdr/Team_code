// src/app/services/auth.service.ts
import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

export interface User {
  username?: string;
  email: string;
  firstName?: string;
  lastName?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSignal = signal<User | null>(null);
  
  constructor(private router: Router) {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.currentUserSignal.set(JSON.parse(storedUser));
    }
  }

  get currentUser() {
    return this.currentUserSignal();
  }

  isLoggedIn(): boolean {
    return this.currentUserSignal() !== null;
  }

  login(email: string, password: string, username?: string): boolean {
    if (email && password.length >= 6) {
      const user: User = {
        username: username || email.split('@')[0],
        email: email
      };
      
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSignal.set(user);
      
      return true;
    }
    return false;
  }

  signup(firstName: string, lastName: string, email: string, password: string): boolean {
    if (firstName && lastName && email && password.length >= 6) {
      const user: User = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        username: `${firstName.toLowerCase()}.${lastName.toLowerCase()}`
      };
      
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSignal.set(user);
      
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSignal.set(null);
    this.router.navigate(['/login']);
  }
}