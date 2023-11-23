import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsCycleComponent } from './settings-cycle.component';

describe('SettingsCycleComponent', () => {
  let component: SettingsCycleComponent;
  let fixture: ComponentFixture<SettingsCycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsCycleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
