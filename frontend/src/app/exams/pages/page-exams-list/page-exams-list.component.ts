import {
  Component,
  inject,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { DatePipe } from '@angular/common';
import { Subscription } from 'rxjs';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

import { PageHeaderComponent } from 'src/app/core/components/page-header/page-header.component';
import { StateWrapperComponent } from 'src/app/core/components/state-wrapper/state-wrapper.component';

import { AddExamFormComponent } from 'src/app/exams/components/add-exam-form/add-exam-form.component';
import { ExamsTableComponent } from 'src/app/exams/components/exams-table/exams-table.component';
import { Exam } from 'src/app/exams/models/exam.model';
import { ExamsApiService } from 'src/app/exams/services/exams-api.service';

@Component({
  standalone: true,
  selector: 'app-page-exams-list',
  templateUrl: './page-exams-list.component.html',
  styleUrl: './page-exams-list.component.scss',
  imports: [
    ButtonModule,
    DialogModule,
    PageHeaderComponent,
    StateWrapperComponent,
    AddExamFormComponent,
    ExamsTableComponent,
    DatePipe,
  ],
})
export class PageExamsListComponent implements OnInit, OnDestroy {
  exams: Exam[];
  examsInfo: string;
  examsError: string | undefined;
  examsLoading = false;
  private examsApi = inject(ExamsApiService);
  
  addDialogVisible = false;

  private subscription = new Subscription();

  ngOnInit(): void {
    this.listExams();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  refresh(): void {
    if (this.addDialogVisible) this.addDialogVisible = false;
    this.listExams();
  }

  private listExams(): void {
    this.examsLoading = true;
    this.examsError = undefined;
    const sub = this.examsApi.list().subscribe({
      next: (exams) => {
        this.examsLoading = false;
        this.exams = exams;
        this.examsInfo = this.getExamInfo(exams);
      },
      error: (error) => {
        this.examsError = error;
        this.exams = [];
        this.examsLoading = false;
      },
    });
    this.subscription.add(sub);
  }

  private getExamInfo(exams: Exam[]): string {
    if (exams.length) return 'Aucun examen à venir';
    else if (exams.length === 1) return '1 examen à venir';
    else return `${this.exams.length} examens à venir`;
  }
}
