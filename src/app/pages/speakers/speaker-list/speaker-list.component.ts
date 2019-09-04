import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-speaker-list',
  templateUrl: './speaker-list.component.html',
  styleUrls: ['./speaker-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpeakerListComponent implements OnInit {
  speakers$: Observable<any>;

  constructor() {
    this.speakers$ = of([1, 1, 1, 1, 1, 1, 1, 1]);
  }

  ngOnInit() {}
}