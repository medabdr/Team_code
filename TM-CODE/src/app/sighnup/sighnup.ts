// src/app/sighnup/sighnup.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './sighnup.html',
  styleUrls: ['./sighnup.css']
})
export class sighnupComponent {
  signupForm: FormGroup;
  showPassword = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
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
      const { firstName, lastName, email, password } = this.signupForm.value;
      
      const success = this.authService.signup(firstName, lastName, email, password);
      
      if (success) {
        console.log('Inscription réussie!');
        this.router.navigate(['/dashboard']);
      } else {
        this.errorMessage = 'Erreur lors de l\'inscription';
      }
    } else {
      this.errorMessage = 'Veuillez remplir tous les champs correctement';
    }
  }
}