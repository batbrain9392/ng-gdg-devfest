import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamIntroductionComponent } from './team-introduction.component';

describe('TeamIntroductionComponent', () => {
  let component: TeamIntroductionComponent;
  let fixture: ComponentFixture<TeamIntroductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamIntroductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
