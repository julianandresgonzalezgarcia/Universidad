import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterMeSubjectComponent } from './register-me-subject.component';

describe('RegisterMeSubjectComponent', () => {
  let component: RegisterMeSubjectComponent;
  let fixture: ComponentFixture<RegisterMeSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterMeSubjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterMeSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
