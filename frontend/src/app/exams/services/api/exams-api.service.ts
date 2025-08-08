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
        // TODO: implement better error handling
        return throwError(() => 'Impossible de récupérer les examens. Veuillez réessayer plus tard.');
      }),
      map(exams => this.processExams(exams))
    );
  }

  add(exam: Exam): Observable<Exam> {
    return this.http.post<Exam>(`${environment.apiUrl}/${this.path}`, exam);
  }

  private processExams(exams: Exam[]): Exam[] {
    exams.forEach((exam) => {
      if (exam.status === ExamStatus.CONFIRMED) exam.statusColor = 'success';
      else if (exam.status === ExamStatus.CANCELED) exam.statusColor = 'error';
      else if (exam.status === ExamStatus.AVAILABILITY_CHECK) exam.statusColor = 'info';
      else if (exam.status === ExamStatus.TO_COME) exam.statusColor = 'primary';
    });
    return exams;
  }
}
