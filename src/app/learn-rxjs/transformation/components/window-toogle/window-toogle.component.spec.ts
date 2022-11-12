import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowToogleComponent } from './window-toogle.component';

describe('WindowToogleComponent', () => {
  let component: WindowToogleComponent;
  let fixture: ComponentFixture<WindowToogleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WindowToogleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowToogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
