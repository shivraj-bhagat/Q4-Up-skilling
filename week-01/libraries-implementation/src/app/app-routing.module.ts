import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartjsComponent } from './chartjs/chartjs.component';
import { FullCalendarComponent } from './full-calendar/full-calendar.component';

const routes: Routes = [
  { path: 'full-calendar', component: FullCalendarComponent },
  { path: 'chartjs', component: ChartjsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
