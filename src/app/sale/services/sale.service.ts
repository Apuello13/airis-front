import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Sale } from '../models/sale';

@Injectable()
export class SaleService {
  private saleUrl: string = `${environment.apiUrl}/sale`;
  constructor(private http: HttpClient) {}

  save(sale: Sale) {
    return this.http.post<Sale>(this.saleUrl, sale);
  }

  findAll() {
    return this.http.get<Sale[]>(this.saleUrl);
  }

  deleteById(saleId: number) {
    return this.http.delete(`${this.saleUrl}/${saleId}`);
  }
}
