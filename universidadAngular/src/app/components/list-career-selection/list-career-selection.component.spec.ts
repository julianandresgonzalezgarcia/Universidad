import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCareerSelectionComponent } from './list-career-selection.component';

describe('ListCareerSelectionComponent', () => {
  let component: ListCareerSelectionComponent;
  let fixture: ComponentFixture<ListCareerSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCareerSelectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCareerSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
