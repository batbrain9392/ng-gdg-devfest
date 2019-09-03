import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages';

const routes: Routes = [
  { path: 'schedule', component: HomeComponent },
  { path: 'speakers', component: HomeComponent },
  { path: 'team', component: HomeComponent },
  { path: '', pathMatch: 'full', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
