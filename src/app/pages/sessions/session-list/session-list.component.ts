import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeoService } from 'src/app/shared/services';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SessionListComponent implements OnInit {
  constructor(private seoService: SeoService, private router: Router) {}

  ngOnInit() {
    this.seo();
  }

  seo() {
    this.seoService.updateTitle('Sessions');
    this.seoService.updateUrl(this.router.url);
    this.seoService.updateType('website');
    this.seoService.updateDescription('Description of sessions');
    this.seoService.updateImageUrl('https://via.placeholder.com/100');
  }
}
