import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import {  MatFormFieldModule, MatInputModule, MatIconModule, MatListModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ModifyUserComponent } from './modify-user/modify-user.component';
import { ModifyCompanyComponent } from './modify-company/modify-company.component';

@NgModule({
  declarations: [ 
  ModifyUserComponent, ModifyCompanyComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatIconModule,
    MatListModule
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatInputModule,
    MatIconModule
    ],
})
export class AdminModule { }
