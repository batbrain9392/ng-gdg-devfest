import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-img-round',
  templateUrl: './img-round.component.html',
  styleUrls: ['./img-round.component.scss']
})
export class ImgRoundComponent {
  @Input() src = 'https://via.placeholder.com/128';
  @Input() alt = 'headshot';
}
