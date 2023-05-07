import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../core/pages/layout/layout.component';
import { ListProjectComponent } from './components/list-project/list-project.component';
import { FormProjectComponent } from './components/form-project/form-project.component';
import { MapProjectComponent } from './components/map-project/map-project.component';

const ROUTES: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: ListProjectComponent },
      { path: 'form', component: FormProjectComponent },
      { path: 'map', component: MapProjectComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ProjectRoutingModule {}
