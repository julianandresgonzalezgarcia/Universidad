import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsFacultyComponent } from './settings-faculty.component';

describe('SettingsFacultyComponent', () => {
  let component: SettingsFacultyComponent;
  let fixture: ComponentFixture<SettingsFacultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsFacultyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsFacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
