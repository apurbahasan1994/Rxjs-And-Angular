import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeSacnComponent } from './merge-sacn.component';

describe('MergeSacnComponent', () => {
  let component: MergeSacnComponent;
  let fixture: ComponentFixture<MergeSacnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergeSacnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeSacnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
