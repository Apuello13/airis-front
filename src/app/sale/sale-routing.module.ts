import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../core/pages/layout/layout.component';
import { ListSaleComponent } from './components/list-sale/list-sale.component';
import { FormSaleComponent } from './components/form-sale/form-sale.component';

const ROUTES: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: ListSaleComponent },
      { path: 'form', component: FormSaleComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class SaleRoutingModule {}
