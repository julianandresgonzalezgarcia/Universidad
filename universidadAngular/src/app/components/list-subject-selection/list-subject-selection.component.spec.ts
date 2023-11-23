import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSubjectSelectionComponent } from './list-subject-selection.component';

describe('ListSubjectSelectionComponent', () => {
  let component: ListSubjectSelectionComponent;
  let fixture: ComponentFixture<ListSubjectSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSubjectSelectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSubjectSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
