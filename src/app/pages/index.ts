import { homeComponents } from './home';
import { ScheduleComponent } from './schedule/schedule.component';
import { speakerComponents } from './speakers';
import { teamComponents } from './team';

export * from './home';
export { ScheduleComponent } from './schedule/schedule.component';
export * from './speakers';
export * from './team';

export const pages = [
  ...homeComponents,
  ScheduleComponent,
  ...speakerComponents,
  ...teamComponents
];
