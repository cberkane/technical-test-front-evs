import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';

import { ChipComponent } from 'src/app/core/components/chip/chip.component';
import { Exam } from 'src/app/exams/models/exam.model';


@Component({
  standalone: true,
  selector: 'app-exams-table',
  templateUrl: './exams-table.component.html',
  styleUrl: './exams-table.component.scss',
  imports: [
    DatePipe,
    ChipComponent,
  ],
})
export class ExamsTableComponent {

  @Input() exams: Exam[];

}
