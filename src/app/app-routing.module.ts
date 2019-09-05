import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  HomeComponent,
  ScheduleComponent,
  SpeakerDetailsComponent,
  SpeakerListComponent,
  TeamComponent
} from './pages';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'speakers/:id', component: SpeakerDetailsComponent },
  { path: 'speakers', component: SpeakerListComponent },
  { path: 'team', component: TeamComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 56]
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
