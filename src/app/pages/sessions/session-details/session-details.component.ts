import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeoService } from 'src/app/shared/services';

@Component({
  selector: 'app-session-details',
  templateUrl: './session-details.component.html',
  styleUrls: ['./session-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SessionDetailsComponent implements OnInit {
  constructor(private seoService: SeoService, private router: Router) {}

  ngOnInit() {
    this.seo();
  }

  seo() {
    this.seoService.updateTitle('Session Title');
    this.seoService.updateUrl(this.router.url);
    this.seoService.updateType('website');
    this.seoService.updateDescription('Description of session');
    this.seoService.updateImageUrl('https://via.placeholder.com/100');
  }
}
