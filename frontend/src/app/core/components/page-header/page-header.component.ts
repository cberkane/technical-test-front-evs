import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.scss',
  imports: [],
})
export class PageHeaderComponent {
  @Input() title: string;
  @Input() info?: string;
}
