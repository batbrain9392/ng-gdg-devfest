import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-img-round',
  templateUrl: './img-round.component.html',
  styleUrls: ['./img-round.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImgRoundComponent {
  @Input() readonly src: string;
  @Input() readonly alt: string;
  @Input() readonly diameter: number;
  isImgLoaded: boolean;

  onImgLoad() {
    this.isImgLoaded = true;
  }
}
