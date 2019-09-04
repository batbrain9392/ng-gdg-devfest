import { Component, ChangeDetectionStrategy } from '@angular/core';
import { WebShareService } from '../../shared/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  constructor(private webShareService: WebShareService) {}

  onShareClick() {
    this.webShareService.share({
      title: 'Partner',
      text: 'Partner | Type',
      url: 'https://gdg-devfest-ng.herokuapp.com/home'
    });
  }
}
