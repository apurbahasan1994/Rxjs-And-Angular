import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardNumberComponent } from './credit-card-number.component';

describe('CreditCardNumberComponent', () => {
  let component: CreditCardNumberComponent;
  let fixture: ComponentFixture<CreditCardNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditCardNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
