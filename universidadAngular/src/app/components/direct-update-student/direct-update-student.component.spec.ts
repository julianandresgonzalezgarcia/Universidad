import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectUpdateStudentComponent } from './direct-update-student.component';

describe('DirectUpdateStudentComponent', () => {
  let component: DirectUpdateStudentComponent;
  let fixture: ComponentFixture<DirectUpdateStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectUpdateStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectUpdateStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
