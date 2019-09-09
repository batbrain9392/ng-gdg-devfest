import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { ImgRoundComponent } from './img-round/img-round.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { PlaceholderSpinnerComponent } from './placeholder-spinner/placeholder-spinner.component';
import { HeaderFragmentComponent } from './header-fragment/header-fragment.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';

import { dialogs } from './dialogs';

export const components = [
  NavComponent,
  FooterComponent,
  ImgRoundComponent,
  PlaceholderComponent,
  PlaceholderSpinnerComponent,
  HeaderFragmentComponent,
  JumbotronComponent,
  ...dialogs
];

export const entryComponents = [...dialogs];
