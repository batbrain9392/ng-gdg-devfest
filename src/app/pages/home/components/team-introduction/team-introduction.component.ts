import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-team-introduction',
  templateUrl: './team-introduction.component.html',
  styleUrls: ['./team-introduction.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamIntroductionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
