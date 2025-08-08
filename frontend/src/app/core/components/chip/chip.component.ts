import { Component, Input } from '@angular/core';
import { NgClass} from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrl: './chip.component.scss',
  imports: [
    NgClass,
  ],
})
export class ChipComponent {

  @Input() variant: 'primary' | 'info' | 'success' | 'error' = 'primary';

}
