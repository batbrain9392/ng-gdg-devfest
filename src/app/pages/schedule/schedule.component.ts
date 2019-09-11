import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeoService } from 'src/app/shared/services';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleComponent implements OnInit {
  constructor(private seoService: SeoService, private router: Router) {}

  ngOnInit() {
    this.seo();
  }

  seo() {
    this.seoService.updateTitle('Schedule');
    this.seoService.updateUrl(this.router.url);
    this.seoService.updateType('website');
    this.seoService.updateDescription('Description of schedule');
    this.seoService.updateImageUrl('https://via.placeholder.com/100');
  }
}
