import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragAndScoreComponent } from './drag-and-score.component';

describe('DragAndScoreComponent', () => {
  let component: DragAndScoreComponent;
  let fixture: ComponentFixture<DragAndScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragAndScoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragAndScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
