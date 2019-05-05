import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { NotFoundComponent } from './page/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule',
      },
      {
        path: 'tasks',
        loadChildren: './tasks/tasks.module#TasksModule',
      },
      {
        path: 'management',
        loadChildren: './management/management.module#ManagementModule',
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent,
    data: {
      title: '页面不存在'
    }
  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
