import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberSmallComponent } from './member-small.component';

describe('MemberSmallComponent', () => {
  let component: MemberSmallComponent;
  let fixture: ComponentFixture<MemberSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
