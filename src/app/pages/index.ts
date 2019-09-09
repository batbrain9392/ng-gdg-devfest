import { homeComponents } from './home';
import { ScheduleComponent } from './schedule/schedule.component';
import { SpeakerDetailsComponent } from './speakers/speaker-details/speaker-details.component';
import { SpeakerListComponent } from './speakers/speaker-list/speaker-list.component';
import { SpeakerCardComponent } from './speakers/components/speaker-card/speaker-card.component';
import { teamComponents } from './team';

export * from './home';
export { ScheduleComponent } from './schedule/schedule.component';
export { SpeakerDetailsComponent } from './speakers/speaker-details/speaker-details.component';
export { SpeakerListComponent } from './speakers/speaker-list/speaker-list.component';
export { SpeakerCardComponent } from './speakers/components/speaker-card/speaker-card.component';
export * from './team';

export const pages = [
  ...homeComponents,
  ScheduleComponent,
  SpeakerDetailsComponent,
  SpeakerListComponent,
  SpeakerCardComponent,
  ...teamComponents
];
