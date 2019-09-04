import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-speaker-card',
  templateUrl: './speaker-card.component.html',
  styleUrls: ['./speaker-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpeakerCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
