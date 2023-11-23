import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectDeleteStudentComponent } from './direct-delete-student.component';

describe('DirectDeleteStudentComponent', () => {
  let component: DirectDeleteStudentComponent;
  let fixture: ComponentFixture<DirectDeleteStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectDeleteStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectDeleteStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
