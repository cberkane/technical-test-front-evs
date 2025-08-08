import { Component, EventEmitter, inject, Output } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

import { ButtonComponent } from 'src/app/core/components/button/button.component';
import { PageHeaderComponent } from 'src/app/core/components/page-header/page-header.component';

import { ExamsApiService } from 'src/app/exams/services/api/exams-api.service';
import { Exam, ExamStatus } from 'src/app/exams/models/exam.model';

@Component({
  standalone: true,
  selector: 'app-add-exam-form',
  templateUrl: './add-exam-form.component.html',
  styleUrl: './add-exam-form.component.scss',
  imports: [ReactiveFormsModule, ButtonComponent, PageHeaderComponent],
})
export class AddExamFormComponent {
  @Output() submitted = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  private examsApi = inject(ExamsApiService);
  private fb = inject(FormBuilder);

  addExamForm = this.fb.group({
    student: this.fb.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
    }),
    meeting_point: [''],
    date: [''],
    status: [ExamStatus.TO_COME as ExamStatus],
  });

  submitForm(): void {
    if (this.addExamForm.invalid) return;

    const data = this.addExamForm.value as Exam;
    console.log('data', data);
  }

  cancel(): void {
    this.cancelled.emit();
  }
}
