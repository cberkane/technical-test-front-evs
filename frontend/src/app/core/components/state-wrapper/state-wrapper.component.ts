import { Component, Input } from '@angular/core';

import { LoaderComponent } from 'src/app/core/components/loader/loader.component';

@Component({
  standalone: true,
  selector: 'app-state-wrapper',
  templateUrl: './state-wrapper.component.html',
  styleUrl: './state-wrapper.component.scss',
  imports: [LoaderComponent],
})
export class StateWrapperComponent {
  @Input() loading: boolean;
  @Input() errorMessage: string | undefined;
  @Input() empty = false;
  @Input() emptyMessage: string | undefined;
}
