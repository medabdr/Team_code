import { Component , Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
    @Input() iconPath : string = '';
    @Input() label: string = 'Click Me';
    @Input() colorClass: string = '';
    @Input() hovercolor: string = '';

}
