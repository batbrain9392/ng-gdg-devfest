import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { of } from 'rxjs';
import { SeoService } from 'src/app/shared/services';

@Component({
  selector: 'app-speaker-list',
  templateUrl: './speaker-list.component.html',
  styleUrls: ['./speaker-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpeakerListComponent implements OnInit {
  speakers$ = of([1, 1, 1, 1, 1, 1, 1, 1]);

  constructor(private seoService: SeoService) {}

  ngOnInit() {}
}
