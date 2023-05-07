import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { AlertService } from 'src/app/core/services/alert.service';
import { Actions } from 'src/app/utilities/actions';
import { Event } from '../../models/event';
import { Table } from '../../models/table';
import { customPaginator } from '../../utilities/custom-paginator';
import { setCompleteStatus } from '../../utilities/set-complete-status';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  providers: [{ provide: MatPaginatorIntl, useValue: customPaginator() }],
})
export class TableComponent implements OnChanges, AfterViewInit {
  @ViewChild(MatTable) table!: MatTable<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @Input('columns') columns: Table[] = [];
  @Input('rows') rows: any[] = [];
  @Input('actions') actions: string[] = [];
  @Input('showSearch') showSearch: boolean = true;
  @Input('fileNameExcel') fileNameExcel: string = '';
  @Input('showExcelButton') showExcelButton: boolean = true;

  @Output('sendEvent') sendEvent: EventEmitter<Event> = new EventEmitter();

  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageSize: number = 5;
  dataSource = new MatTableDataSource<any>(this.rows);
  searchValue: string = '';

  constructor(private _alert: AlertService) {}

  ngOnChanges(changes: SimpleChanges): void {
    const EMPTY = 0;
    const rows = changes['rows'];
    if (
      !rows.firstChange ||
      rows.previousValue?.length === EMPTY ||
      rows.currentValue.length !== this.rows.length
    ) {
      this.dataSource.data = this.rows;
      this.paginateRows();
      this.table.renderRows();
    }
  }

  ngAfterViewInit(): void {
    this.paginateRows();
  }

  getHeadersName(): string[] {
    return this.columns.map((column) => column.headerName);
  }

  paginateRows(): void {
    this.dataSource.paginator = this.paginator;
  }

  isExistsAction(action: string): boolean {
    return !!this.actions.find((a) => a === action);
  }

  downloadReport(): void {}

  getFields(): string[] {
    return this.columns.map((column) => column.field);
  }

  getCompleteStatus(status: string): string {
    return setCompleteStatus(status);
  }

  confirmAction(rowId: number): void {
    this._alert.confirmDelete().then((result) => {
      if (result.isConfirmed) {
        this.sendEvent.emit({ event: Actions.DELETE, rowId, row: null });
      }
    });
  }

  sendOpenDialog(row: any): void {
    this.sendEvent.emit({ event: Actions.VIEW, row, rowId: 0 });
  }

  sendSearchValue() {
    this.sendEvent.emit({
      event: Actions.SEARCH,
      rowId: 0,
      row: this.searchValue,
    });
  }

  getObjectValue(element: any, field: string): string | number {
    const keys = field.split('.');
    const lengthKeys = keys.length;
    let currentValue: any = null;
    keys.map((key, index) => {
      if (index !== lengthKeys - 1) currentValue = element[key];
    });
    return currentValue[keys[lengthKeys - 1]];
  }
}
