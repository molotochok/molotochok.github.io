import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawOnTimeComponent } from './draw-on-time.component';

describe('DrawOnTimeComponent', () => {
  let component: DrawOnTimeComponent;
  let fixture: ComponentFixture<DrawOnTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrawOnTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawOnTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
