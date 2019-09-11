import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { SeoService } from 'src/app/shared/services';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleComponent implements OnInit {
  constructor(private seoService: SeoService) {}

  ngOnInit() {}
}
