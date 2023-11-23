import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDeleteStudentComponent } from './confirm-delete-student.component';

describe('ConfirmDeleteStudentComponent', () => {
  let component: ConfirmDeleteStudentComponent;
  let fixture: ComponentFixture<ConfirmDeleteStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmDeleteStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmDeleteStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
