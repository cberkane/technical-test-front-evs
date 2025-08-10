import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ChipModule } from 'primeng/chip';

import { Exam } from 'src/app/exams/models/exam.model';


@Component({
  standalone: true,
  selector: 'app-exams-table',
  templateUrl: './exams-table.component.html',
  styleUrl: './exams-table.component.scss',
  imports: [
    ChipModule,
    DatePipe,
  ],
})
export class ExamsTableComponent {

  @Input() exams: Exam[];

}
