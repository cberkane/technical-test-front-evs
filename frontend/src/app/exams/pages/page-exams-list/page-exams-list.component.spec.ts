import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageExamsListComponent } from './page-exams-list.component';

describe('PageExamsListComponent', () => {
  let component: PageExamsListComponent;
  let fixture: ComponentFixture<PageExamsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageExamsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageExamsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
