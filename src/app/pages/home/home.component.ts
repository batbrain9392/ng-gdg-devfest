import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  isVideoLoaded: boolean;
  mapUrl =
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14735.93107' +
    '339768!2d88.4611633!3d22.5797478!3m2!1i1024!2i768!4f13.1!3m3!1m2' +
    '!1s0x0%3A0xb81242f6fef0e357!2sNovotel%20Kolkata%20Hotel%20And%20' +
    'Residences!5e0!3m2!1sen!2ssg!4v1568031353983!5m2!1sen!2ssg';
  videoUrl1 = 'https://www.youtube.com/embed/6wgYj77ktMw';
  videoUrl2 = 'https://www.youtube.com/embed/cWdKPhf6WVA';

  constructor() {}

  onVideoLoad() {
    this.isVideoLoaded = true;
  }
}
