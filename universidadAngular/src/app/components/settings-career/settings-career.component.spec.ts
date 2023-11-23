import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsCareerComponent } from './settings-career.component';

describe('SettingsCareerComponent', () => {
  let component: SettingsCareerComponent;
  let fixture: ComponentFixture<SettingsCareerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsCareerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsCareerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
