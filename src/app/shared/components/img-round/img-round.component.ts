import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-img-round',
  templateUrl: './img-round.component.html',
  styleUrls: ['./img-round.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImgRoundComponent {
  @Input() readonly src = 'https://via.placeholder.com/128';
  @Input() readonly alt = 'headshot';
  isImgLoaded: boolean;

  onImgLoad() {
    this.isImgLoaded = true;
  }
}
