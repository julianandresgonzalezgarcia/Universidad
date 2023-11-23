import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDeleteNoteComponent } from './confirm-delete-note.component';

describe('ConfirmDeleteNoteComponent', () => {
  let component: ConfirmDeleteNoteComponent;
  let fixture: ComponentFixture<ConfirmDeleteNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmDeleteNoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmDeleteNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
