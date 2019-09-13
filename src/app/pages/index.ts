import { homeComponents } from './home';
import { ScheduleComponent } from './schedule/schedule.component';
import { speakerComponents } from './speakers';
import { teamComponents } from './team';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';

export * from './home';
export * from './schedule/schedule.component';
export * from './speakers';
export * from './team';
export * from './path-not-found/path-not-found.component';

export const pages = [
  ...homeComponents,
  ScheduleComponent,
  ...speakerComponents,
  ...teamComponents,
  PathNotFoundComponent
];
