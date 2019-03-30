import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSelectedComponent } from './order-selected.component';

describe('OrderSelectedComponent', () => {
  let component: OrderSelectedComponent;
  let fixture: ComponentFixture<OrderSelectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderSelectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
