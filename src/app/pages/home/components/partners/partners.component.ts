import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PartnersComponent {
  loadResource: boolean;

  onViewed() {
    this.loadResource = true;
  }
}
