import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeoService } from 'src/app/shared/services';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamComponent implements OnInit {
  constructor(private seoService: SeoService, private router: Router) {}

  ngOnInit() {
    this.seo();
  }

  seo() {
    this.seoService.updateTitle('Team');
    this.seoService.updateUrl(this.router.url);
    this.seoService.updateType('website');
    this.seoService.updateDescription('Description of team');
    this.seoService.updateImageUrl('https://via.placeholder.com/100');
  }
}
