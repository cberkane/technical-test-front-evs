import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, map, throwError } from 'rxjs';

import { Exam, ExamStatus } from 'src/app/exams/models/exam.model';
import { environment } from 'src/environments/environement';

@Injectable({
  providedIn: 'root',
})
export class ExamsApiService {
  private path = 'exams';
  private http = inject(HttpClient);

  list(): Observable<Exam[]> {
    return this.http.get<Exam[]>(`${environment.apiUrl}/${this.path}`).pipe(
      catchError(() => {
        // example
        return throwError(() => 'Impossible de récupérer les examens. Veuillez réessayer plus tard.');
      }),
      map(exams => this.processExams(exams))
    );
  }

  add(exam: Exam): Observable<Exam> {
    return this.http.post<Exam>(`${environment.apiUrl}/${this.path}`, exam).pipe(
      catchError(() => {
        // example
        return throwError(() => 'Impossible d\'ajouter l\'examen. Veuillez réessayer plus tard.');
      }),
    )
  }

  private processExams(exams: Exam[]): Exam[] {
    exams.forEach((exam) => {
      switch (exam.status?.toLowerCase()) {
      case ExamStatus.CONFIRMED:
        exam.statusColor = 'success';
        break;
      case ExamStatus.CANCELED:
        exam.statusColor = 'error';
        break;
      case ExamStatus.AVAILABILITY_CHECK:
        exam.statusColor = 'info';
        break;
      case ExamStatus.TO_COME:
        exam.statusColor = 'primary';
        break;
      default:
        exam.statusColor = 'primary';
    }
    });
    return exams;
  }
}
