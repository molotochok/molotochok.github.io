import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTilesComponent } from './list-tiles.component';

describe('ListTilesComponent', () => {
  let component: ListTilesComponent;
  let fixture: ComponentFixture<ListTilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
