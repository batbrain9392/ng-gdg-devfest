import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  HomeComponent,
  SessionDetailsComponent,
  SessionListComponent,
  SpeakerDetailsComponent,
  SpeakerListComponent,
  TeamComponent,
  PathNotFoundComponent
} from './pages';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sessions/:id', component: SessionDetailsComponent },
  { path: 'sessions', component: SessionListComponent },
  { path: 'speakers/:id', component: SpeakerDetailsComponent },
  { path: 'speakers', component: SpeakerListComponent },
  { path: 'team', component: TeamComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: '**', component: PathNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 64]
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
