import { Student } from './student.model';

export interface Exam {
  student: Student;
  meeting_point?: string;
  date?: string;
  status?: ExamStatus;

  // For front-end purpose only
  statusColor: 'primary' | 'info' | 'success' | 'error';
}

export enum ExamStatus {
  TO_COME = 'à organiser',
  CANCELED = 'annulé',
  CONFIRMED = 'confirmé',
  AVAILABILITY_CHECK = 'Recherche de place',
}
