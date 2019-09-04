import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-speaker-details',
  templateUrl: './speaker-details.component.html',
  styleUrls: ['./speaker-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpeakerDetailsComponent {
  onShareClick() {
    if (navigator && (navigator as any).share) {
      (navigator as any)
        .share({
          title: 'Name Surname',
          text: 'Profession | Profession | Profession | Profession',
          url: 'https://gdg-devfest-ng.herokuapp.com/speakers/id'
        })
        .then(() => console.log('Successful share'))
        .catch((error: any) => console.log('Error sharing', error));
    } else {
      console.log('No share api');
    }
  }
}
