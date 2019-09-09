import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-event-introduction',
  templateUrl: './event-introduction.component.html',
  styleUrls: ['./event-introduction.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventIntroductionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
