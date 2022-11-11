import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependencyDetailComponent } from './dependency-detail.component';

describe('DependencyDetailComponent', () => {
  let component: DependencyDetailComponent;
  let fixture: ComponentFixture<DependencyDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DependencyDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DependencyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
