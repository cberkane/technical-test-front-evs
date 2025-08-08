import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
  imports: [],
})
export class LoaderComponent {
  @Input() size: 'sm' | 'md' | 'lg' | 'xl' = 'sm';
  @Input() dark = false;

  get loaderClasses(): string {
    let classes = 'la-ball-grid-beat';
    if (this.dark) classes += ' la-dark';

    switch (this.size) {
      case 'sm': return `${classes} la-sm`;
      case 'md': return `${classes} la-md`;
      case 'lg': return `${classes} la-2x`;
      case 'xl': return `${classes} la-3x`;
      default: return classes;
    }
  }
}
