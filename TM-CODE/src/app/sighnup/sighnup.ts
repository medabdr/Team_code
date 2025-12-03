import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sighnup.html',
  styleUrls: ['./sighnup.css']
})
export class sighnupComponent {
  signupForm: FormGroup;
  showPassword = false;

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      firstName: ['Michal', Validators.required],
      lastName: ['Masiak', Validators.required],
      email: ['michal.masiak@anywhere.co', [Validators.required, Validators.email]],
      password: ['12345678', Validators.required]
    });
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log('Form Submitted', this.signupForm.value);
    }
  }
}