import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCycleSelectionComponent } from './list-cycle-selection.component';

describe('ListCycleSelectionComponent', () => {
  let component: ListCycleSelectionComponent;
  let fixture: ComponentFixture<ListCycleSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCycleSelectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCycleSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
