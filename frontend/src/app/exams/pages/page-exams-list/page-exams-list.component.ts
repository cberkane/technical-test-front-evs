import {
  Component,
  ViewChild,
  TemplateRef,
  inject,
  ViewContainerRef,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { DatePipe } from '@angular/common';
import { Subscription } from 'rxjs';
import { OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';

import { ButtonComponent } from 'src/app/core/components/button/button.component';
import { CardComponent } from 'src/app/core/components/card/card.component';
import { ChipComponent } from 'src/app/core/components/chip/chip.component';
import { DialogService } from 'src/app/core/services/dialog.service';
import { PageHeaderComponent } from 'src/app/core/components/page-header/page-header.component';
import { StateWrapperComponent } from 'src/app/core/components/state-wrapper/state-wrapper.component';

import { AddExamFormComponent } from 'src/app/exams/components/add-exam-form/add-exam-form.component';
import { ExamsTableComponent } from "src/app/exams/components/exams-table/exams-table.component";
import { Exam } from 'src/app/exams/models/exam.model';
import { ExamsApiService } from 'src/app/exams/services/api/exams-api.service';


@Component({
  standalone: true,
  selector: 'app-page-exams-list',
  templateUrl: './page-exams-list.component.html',
  styleUrl: './page-exams-list.component.scss',
  imports: [
    ButtonComponent,
    CardComponent,
    ChipComponent,
    PageHeaderComponent,
    StateWrapperComponent,
    AddExamFormComponent,
    ExamsTableComponent,
    DatePipe,
  ],
})
export class PageExamsListComponent implements OnInit, OnDestroy {
  @ViewChild('addDialog') dialogTemplate: TemplateRef<unknown>;

  exams: Exam[];
  examsInfo: string;
  examsError: string | undefined;
  examsLoading = false;
  private examsApi = inject(ExamsApiService);

  private dialog: OverlayRef | undefined;
  private dialogService = inject(DialogService);
  private vcr = inject(ViewContainerRef);

  private subscription = new Subscription();

  ngOnInit(): void {
    this.listExams();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.closeAddDialog();
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

  openAddDialog(): void {
    if (this.dialog && this.dialog.hasAttached()) return;

    this.dialog = this.dialogService.create();
    const templatePortal = new TemplatePortal(this.dialogTemplate, this.vcr);
    this.dialog.attach(templatePortal);
    this.dialog.backdropClick().subscribe(() => this.closeAddDialog());
  }

  closeAddDialog(): void {
    this.dialog?.detach();
    this.dialog?.dispose();
    this.dialog = undefined;
  }
}
