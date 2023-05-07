import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  imports: [
    MatTableModule,
    MatCheckboxModule,
    MatChipsModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSelectModule,
    MatStepperModule,
    MatTableModule,
    MatGridListModule,
    MatInputModule,
    MatExpansionModule,
    MatTooltipModule,
    MatMenuModule,
    MatDialogModule,
    MatDividerModule,
    MatProgressBarModule,
    MatRadioModule,
  ],
  exports: [
    MatTableModule,
    MatCheckboxModule,
    MatChipsModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSelectModule,
    MatStepperModule,
    MatTableModule,
    MatGridListModule,
    MatInputModule,
    MatExpansionModule,
    MatTooltipModule,
    MatMenuModule,
    MatDialogModule,
    MatDividerModule,
    MatProgressBarModule,
    MatRadioModule,
  ],
})
export class MaterialModule {}
