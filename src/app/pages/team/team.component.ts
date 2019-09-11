import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { SeoService } from 'src/app/shared/services';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamComponent implements OnInit {
  constructor(private seoService: SeoService) {}

  ngOnInit() {}
}
