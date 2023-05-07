import { Component, OnInit } from '@angular/core';
import { SaleService } from '../../services/sale.service';
import { AlertService } from 'src/app/core/services/alert.service';
import { Sale } from '../../models/sale';
import { Actions } from 'src/app/utilities/actions';
import { Table } from 'src/app/shared/models/table';
import { Event } from 'src/app/shared/models/event';

@Component({
  selector: 'app-list-sale',
  templateUrl: './list-sale.component.html',
})
export class ListSaleComponent implements OnInit {
  sales: Sale[] = [];
  columns: Table[] = [
    { headerName: 'Mes', field: 'month' },
    { headerName: 'Total inmuebles', field: 'amountRealState' },
    { headerName: 'Total venta', field: 'fullSale' },
    { headerName: 'Acciones', field: 'id' },
  ];
  actions: string[] = [Actions.DELETE];
  constructor(private _sale: SaleService, private _alert: AlertService) {}

  ngOnInit(): void {
    this.getSales();
  }

  getSales(): void {
    this._sale.findAll().subscribe((result) => (this.sales = result));
  }

  getEvent(action: Event): void {
    if (action.event === Actions.DELETE) this.deleteById(action.rowId);
  }

  deleteById(saleId: number): void {
    this._sale.deleteById(saleId).subscribe(
      () => {
        this._alert.success('Estadistica eliminada con éxito');
        this.sales = this.sales.filter((sale) => sale.id !== saleId);
      },
      (badRequest) => {
        const message = badRequest.error?.message;
        this._alert.error(message);
      }
    );
  }
}
