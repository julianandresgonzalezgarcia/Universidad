import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsNotesStudentComponent } from './settings-notes-student.component';

describe('SettingsNotesStudentComponent', () => {
  let component: SettingsNotesStudentComponent;
  let fixture: ComponentFixture<SettingsNotesStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsNotesStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsNotesStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
