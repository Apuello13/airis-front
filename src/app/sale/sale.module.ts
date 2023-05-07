import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { SaleRoutingModule } from './sale-routing.module';
import { ListSaleComponent } from './components/list-sale/list-sale.component';
import { FormSaleComponent } from './components/form-sale/form-sale.component';
import { SaleService } from './services/sale.service';

@NgModule({
  declarations: [ListSaleComponent, FormSaleComponent],
  imports: [SharedModule, MaterialModule, SaleRoutingModule],
  providers: [SaleService],
})
export class SaleModule {}
