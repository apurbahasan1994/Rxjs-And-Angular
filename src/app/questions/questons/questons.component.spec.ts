import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestonsComponent } from './questons.component';

describe('QuestonsComponent', () => {
  let component: QuestonsComponent;
  let fixture: ComponentFixture<QuestonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
