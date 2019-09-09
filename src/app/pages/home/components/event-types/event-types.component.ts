import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-event-types',
  templateUrl: './event-types.component.html',
  styleUrls: ['./event-types.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventTypesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
