import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-img-round',
  templateUrl: './img-round.component.html',
  styleUrls: ['./img-round.component.scss']
})
export class ImgRoundComponent implements OnInit {
  @Input() src: string;

  constructor() {}

  ngOnInit() {}
}
