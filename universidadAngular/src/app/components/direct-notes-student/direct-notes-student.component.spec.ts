import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectNotesStudentComponent } from './direct-notes-student.component';

describe('DirectNotesStudentComponent', () => {
  let component: DirectNotesStudentComponent;
  let fixture: ComponentFixture<DirectNotesStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectNotesStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectNotesStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
