import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  HomeComponent,
  ScheduleComponent,
  SpeakersComponent,
  TeamComponent
} from './pages';

const routes: Routes = [
  { path: 'schedule', component: ScheduleComponent },
  { path: 'speakers', component: SpeakersComponent },
  { path: 'team', component: TeamComponent },
  { path: '', pathMatch: 'full', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
