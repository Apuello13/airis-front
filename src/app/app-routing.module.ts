import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'sales',
    loadChildren: () => import('./sale/sale.module').then((s) => s.SaleModule),
  },
  {
    path: 'projects',
    loadChildren: () =>
      import('./project/project.module').then((p) => p.ProjectModule),
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
