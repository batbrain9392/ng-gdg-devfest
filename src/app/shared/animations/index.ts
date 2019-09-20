// npm i ngx-animate

// https://daneden.github.io/animate.css/
// https://github.com/mygu/ngx-animate/

import {
  trigger,
  transition,
  query,
  style,
  stagger,
  animate,
  state
} from '@angular/animations';
// import { fadeOutUp, fadeInUp } from 'ngx-animate';

// export const themeChange = trigger('themeChange', [
//   transition(':enter', useAnimation(fadeInUp)),
//   transition(':leave', useAnimation(fadeOutUp))
// ]);

export const fade = trigger('fade', [
  state('void', style({ opacity: 0 })),
  transition(':enter, :leave', animate(200))
]);

export const staricase = trigger('staricase', [
  transition('* => *', [
    query(
      'a',
      style({ transform: 'rotateX(90deg)', 'transform-origin': 'top' })
    ),
    query('a', stagger('100ms', [animate('100ms')]))
  ])
]);
