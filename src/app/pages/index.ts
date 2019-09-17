import { homeComponents } from './home';
import { sessionComponents } from './sessions';
import { speakerComponents } from './speakers';
import { teamComponents } from './team';
import { PathNotFoundComponent } from './path-not-found/path-not-found.component';

export * from './home';
export * from './sessions';
export * from './speakers';
export * from './team';
export * from './path-not-found/path-not-found.component';

export const pages = [
  ...homeComponents,
  ...sessionComponents,
  ...speakerComponents,
  ...teamComponents,
  PathNotFoundComponent
];
