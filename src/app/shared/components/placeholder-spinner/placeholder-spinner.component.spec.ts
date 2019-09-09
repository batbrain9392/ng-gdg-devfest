import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceholderSpinnerComponent } from './placeholder-spinner.component';

describe('PlaceholderSpinnerComponent', () => {
  let component: PlaceholderSpinnerComponent;
  let fixture: ComponentFixture<PlaceholderSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceholderSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceholderSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
