import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAlumnoSelectionComponent } from './list-alumno-selection.component';

describe('ListAlumnoSelectionComponent', () => {
  let component: ListAlumnoSelectionComponent;
  let fixture: ComponentFixture<ListAlumnoSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAlumnoSelectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAlumnoSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
