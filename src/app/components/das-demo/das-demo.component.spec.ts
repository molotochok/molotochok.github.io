import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasDemoComponent } from './das-demo.component';

describe('DasDemoComponent', () => {
  let component: DasDemoComponent;
  let fixture: ComponentFixture<DasDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DasDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DasDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
