import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ISpeaker } from 'src/app/models';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss']
})
export class SpeakersComponent implements OnInit {
  speakers$: Observable<ISpeaker>;

  constructor() {
    this.speakers$ = of([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
  }

  ngOnInit() {}
}
