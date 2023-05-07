import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/core/services/alert.service';
import { SaleService } from '../../services/sale.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-sale',
  templateUrl: './form-sale.component.html',
})
export class FormSaleComponent {
  saleForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _alert: AlertService,
    private _sale: SaleService
  ) {
    this.initForm();
  }

  initForm(): void {
    this.saleForm = this.fb.group({
      id: 0,
      month: ['', Validators.required],
      amountRealState: ['', Validators.required],
      fullSale: ['', Validators.required],
    });
  }

  save(): void {
    this._sale.save(this.saleForm.value).subscribe(
      () => {
        this._alert.success('Estadistica creada con éxito');
        this.goList();
      },
      (badRequest) => {
        const message = badRequest.error?.message;
        this._alert.error(message);
      }
    );
  }

  goList(): void {
    this.router.navigateByUrl('/sales');
  }
}
