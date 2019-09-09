import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-team-introduction',
  templateUrl: './team-introduction.component.html',
  styleUrls: ['./team-introduction.component.scss', '../home.shared.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamIntroductionComponent {}
