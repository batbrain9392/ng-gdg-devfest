import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { IWebShare } from './i-web-share';

@Injectable({
  providedIn: 'root'
})
export class WebShareService {
  readonly isWebShareAvailable = !!(navigator && (navigator as any).share);

  constructor(private matSnackBar: MatSnackBar) {
    this.apiAvailabilityLog();
  }

  share({ title, text, url }: IWebShare) {
    (navigator as any)
      .share({ title, text, url })
      .then(() => this.matSnackBar.open('Shared.'))
      .catch((error: any) => {
        this.matSnackBar.open('Something went wrong! Please try again later.');
        console.log('Error sharing', error);
      });
  }

  private apiAvailabilityLog() {
    console.log('Web-share api available -', this.isWebShareAvailable);
  }
}
