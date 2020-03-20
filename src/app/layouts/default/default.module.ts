import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { PostComponent } from 'src/app/modules/post/post.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

import { MatSidenavModule, MatDividerModule, MatInputModule, MatFormFieldModule, MatTableModule, MatPaginatorModule, MatIconModule } from '@angular/material';
import { CreateTicketComponent } from 'src/app/admin/create-ticket/create-ticket.component';
import { CreateCompanyComponent } from 'src/app/admin/create-company/create-company.component';
import { CreateUserComponent } from 'src/app/admin/create-user/create-user.component';
import { CompanyListComponent } from 'src/app/admin/company-list/company-list.component';
import { ModifyUserComponent } from 'src/app/admin/modify-user/modify-user.component';
import { ModifyCompanyComponent } from 'src/app/admin/modify-company/modify-company.component';


@NgModule({
  declarations: [
    DefaultComponent,
    PostComponent,
    CreateTicketComponent,
    CreateCompanyComponent,
    CreateUserComponent,
    CompanyListComponent,
    ModifyUserComponent,
    ModifyCompanyComponent
    ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatIconModule
   ],
  exports : [
    MatSidenavModule,
    MatDividerModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class DefaultModule { }
