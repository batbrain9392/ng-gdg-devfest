import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-placeholder-spinner',
  templateUrl: './placeholder-spinner.component.html',
  styleUrls: ['./placeholder-spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaceholderSpinnerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
