// https://github.com/mygu/ngx-animate

import { trigger, transition, useAnimation } from '@angular/animations';
import { bounce } from 'ngx-animate';

export const animBounce = trigger('bounce', [
  transition('* => *', useAnimation(bounce))
]);
