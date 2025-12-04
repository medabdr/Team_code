// src/app/login/login.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../core/services/auth.service';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  signupForm: FormGroup;
  showPassword = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/dashboard']);
    }

    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    this.errorMessage = '';
    
    if (this.signupForm.valid) {
      const { email, password, username } = this.signupForm.value;
      
      const success = this.authService.login(email, password, username);
      
      if (success) {
        console.log('Connexion réussie!');
        this.router.navigate(['/dashboard']);
      } else {
        this.errorMessage = 'Email ou mot de passe invalide';
      }
    } else {
      this.errorMessage = 'Veuillez remplir tous les champs correctement';
    }
  }
}