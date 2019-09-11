import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebShareService, SeoService } from '../../../shared/services';

@Component({
  selector: 'app-speaker-details',
  templateUrl: './speaker-details.component.html',
  styleUrls: ['./speaker-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpeakerDetailsComponent implements OnInit {
  isWebShareAvailable = this.webShareService.isWebShareAvailable;

  constructor(
    private webShareService: WebShareService,
    private seoService: SeoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.seo();
  }

  seo() {
    console.log();
    this.seoService.updateTitle('Name Surname');
    this.seoService.updateUrl(this.router.url);
    this.seoService.updateType('profile:username');
    this.seoService.updateDescription('Profession | Profession | Hobby');
    this.seoService.updateImageUrl('https://via.placeholder.com/256');
  }

  onShareClick() {
    this.webShareService.share({
      title: 'Name Surname',
      text: 'Name Surname | Speaker',
      url: 'https://gdg-devfest-ng.herokuapp.com/speakers/id'
    });
  }
}
