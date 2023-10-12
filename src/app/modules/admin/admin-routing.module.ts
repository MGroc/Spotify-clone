import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { SessionGuard } from '@core/guards/session.guard';
import { AdminGuard } from '@core/guards/admin.guard';

const routes: Routes = [
  {
    path:'',
    component: AdminPageComponent,
    canActivate:[AdminGuard, SessionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
