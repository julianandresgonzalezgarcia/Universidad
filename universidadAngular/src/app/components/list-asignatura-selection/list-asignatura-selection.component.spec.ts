import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAsignaturaSelectionComponent } from './list-asignatura-selection.component';

describe('ListAsignaturaSelectionComponent', () => {
  let component: ListAsignaturaSelectionComponent;
  let fixture: ComponentFixture<ListAsignaturaSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAsignaturaSelectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAsignaturaSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
