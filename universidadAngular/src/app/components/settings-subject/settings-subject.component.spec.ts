import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsSubjectComponent } from './settings-subject.component';

describe('SettingsSubjectComponent', () => {
  let component: SettingsSubjectComponent;
  let fixture: ComponentFixture<SettingsSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsSubjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
