import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenapiMobileClientComponent } from './openapi-mobile-client.component';

describe('OpenapiMobileClientComponent', () => {
  let component: OpenapiMobileClientComponent;
  let fixture: ComponentFixture<OpenapiMobileClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenapiMobileClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenapiMobileClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
