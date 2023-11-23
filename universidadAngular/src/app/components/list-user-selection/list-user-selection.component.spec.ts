import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUserSelectionComponent } from './list-user-selection.component';

describe('ListUserSelectionComponent', () => {
  let component: ListUserSelectionComponent;
  let fixture: ComponentFixture<ListUserSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListUserSelectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListUserSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
