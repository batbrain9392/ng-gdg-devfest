import { Component, ChangeDetectionStrategy } from '@angular/core';
import { WebShareService } from '../../../shared/services';

@Component({
  selector: 'app-speaker-details',
  templateUrl: './speaker-details.component.html',
  styleUrls: ['./speaker-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpeakerDetailsComponent {
  isWebShareAvailable$ = this.webShareService.isWebShareAvailable$;

  constructor(private webShareService: WebShareService) {}

  onShareClick() {
    this.webShareService.share({
      title: 'Name Surname',
      text: 'Name Surname | Speaker',
      url: 'https://gdg-devfest-ng.herokuapp.com/speakers/id'
    });
  }
}
