import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCycleChoiceComponent } from './list-cycle-choice.component';

describe('ListCycleChoiceComponent', () => {
  let component: ListCycleChoiceComponent;
  let fixture: ComponentFixture<ListCycleChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCycleChoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCycleChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
