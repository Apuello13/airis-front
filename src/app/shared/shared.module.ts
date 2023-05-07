import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { TableComponent } from './components/table/table.component';
import { TitleComponent } from './components/title/title.component';

@NgModule({
  declarations: [TitleComponent, TableComponent],
  imports: [
    MaterialModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    TitleComponent,
    TableComponent,
  ],
})
export class SharedModule {}
