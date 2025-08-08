import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass} from '@angular/common';

import { LoaderComponent } from 'src/app/core/components/loader/loader.component';

@Component({
  standalone: true,
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  imports: [
    NgClass,
    LoaderComponent
  ],
})
export class ButtonComponent {
  @Input() loading = false;
  @Input() variant: "plain" | "outline" = "plain";

  // eslint-disable-next-line @angular-eslint/no-output-native
  @Output() click = new EventEmitter();

  clicked(event: Event): void {
    event.stopPropagation();
    this.click.emit(event);
  }
}
