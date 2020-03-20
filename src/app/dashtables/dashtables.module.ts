import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import {  MatFormFieldModule, MatInputModule, MatIconModule, MatPaginatorModule, MatListModule } from '@angular/material';
import { OpenTicketComponent } from './open-ticket/open-ticket.component';
import { InProgressTicketComponent } from './in-progress-ticket/in-progress-ticket.component';
import { FixedTicketComponent } from './fixed-ticket/fixed-ticket.component';
import { HoldTicketComponent } from './hold-ticket/hold-ticket.component';
import { ReOpenTicketComponent } from './re-open-ticket/re-open-ticket.component';
import { ClosedTicketComponent } from './closed-ticket/closed-ticket.component';




@NgModule({
  declarations: [OpenTicketComponent, InProgressTicketComponent, FixedTicketComponent, HoldTicketComponent, ReOpenTicketComponent, ClosedTicketComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatPaginatorModule,
    MatListModule
  ]
})
export class DashtablesModule { }
