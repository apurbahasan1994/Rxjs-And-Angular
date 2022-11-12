import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BufferToogleComponent } from './buffer-toogle.component';

describe('BufferToogleComponent', () => {
  let component: BufferToogleComponent;
  let fixture: ComponentFixture<BufferToogleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BufferToogleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BufferToogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
