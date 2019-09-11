import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { WebShareService, SeoService } from '../../../shared/services';

@Component({
  selector: 'app-speaker-details',
  templateUrl: './speaker-details.component.html',
  styleUrls: ['./speaker-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpeakerDetailsComponent implements OnInit {
  isWebShareAvailable = this.webShareService.isWebShareAvailable;

  constructor(private webShareService: WebShareService, private seoService: SeoService) {}

  ngOnInit() {}

  onShareClick() {
    this.webShareService.share({
      title: 'Name Surname',
      text: 'Name Surname | Speaker',
      url: 'https://gdg-devfest-ng.herokuapp.com/speakers/id'
    });
  }
}
