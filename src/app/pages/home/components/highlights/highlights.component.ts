import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HighlightsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
