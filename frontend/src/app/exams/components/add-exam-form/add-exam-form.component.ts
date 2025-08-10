import { Component, EventEmitter, inject, Output } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
import { FieldsetModule } from 'primeng/fieldset';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';

import { ExamsApiService } from 'src/app/exams/services/exams-api.service';
import { Exam, ExamStatus } from 'src/app/exams/models/exam.model';

@Component({
  standalone: true,
  selector: 'app-add-exam-form',
  templateUrl: './add-exam-form.component.html',
  styleUrl: './add-exam-form.component.scss',
  imports: [
    ReactiveFormsModule,
    ButtonModule,
    DatePickerModule,
    FieldsetModule,
    FloatLabelModule,
    InputTextModule,
    SelectModule,
  ],
})
export class AddExamFormComponent {
  @Output() submitted = new EventEmitter<Exam>();
  @Output() cancelled = new EventEmitter<void>();

  private fb = inject(FormBuilder);
  selectOptions = Object.values(ExamStatus);
  form = this.fb.group({
    student: this.fb.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
    }),
    meeting_point: [''],
    status: [''],
    date: [''],
    time: [''],
  });
  formError: string | undefined;

  today = new Date();

  private examsApi = inject(ExamsApiService);

  cancel(): void {
    this.cancelled.emit();
  }

  submitForm(): void {
    if (this.form.invalid) return;

    const data: Exam = {
      student: {
        first_name: this.form.value.student?.first_name as string,
        last_name: this.form.value.student?.last_name as string,
      },
      meeting_point: this.form.value.meeting_point ?? undefined,
      status: (this.form.value.status as ExamStatus) ?? undefined,
    };
    const date = this.form.value.date ?? undefined;
    const time = this.form.value.time ?? undefined;
    data.date = this.processDate(date, time);

    this.formError = undefined;
    this.examsApi.add(data).subscribe({
      next: (exam) => {
        this.submitted.emit(exam);
        this.form.reset();
      },
      error: (error) => (this.formError = error),
      complete: () => this.form.reset(),
    });
  }

  private processDate(
    date: string | undefined,
    time: string | undefined
  ): Date | undefined {
    if (date && time) {
      const day = new Date(date);
      const hour = new Date(time);
      day.setHours(hour.getHours(), hour.getMinutes());
      return day;
    }
    return undefined;
  }
}
