import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventIntroductionComponent } from './event-introduction.component';

describe('EventIntroductionComponent', () => {
  let component: EventIntroductionComponent;
  let fixture: ComponentFixture<EventIntroductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventIntroductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
