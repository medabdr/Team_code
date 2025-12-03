import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { CardsComponent } from './shared/components/cards/cards.component';
import { ButtonComponent } from './shared/components/button/button.component';
import {SearchbarComponent} from './shared/components/searchbar/searchbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , 
            HeaderComponent ,
            CardsComponent ,
            ButtonComponent ,
            SearchbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TM-CODE';
}
