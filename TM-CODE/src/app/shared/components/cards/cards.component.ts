import { Component , Input} from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-cards',
  imports: [ CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
    @Input() title: string = '';
    @Input() num: number = 0;
    @Input() descrip: string = '';
    @Input() iconPath: string = '';
    @Input() colorClass: string = '';
    @Input() bgClass: string = '';


}
