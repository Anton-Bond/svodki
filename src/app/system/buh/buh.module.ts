import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuhRoutingModule } from './buh-routing.module';
import { BuhComponent } from './buh.component';
import { BillPageComponent } from './bill-page/bill-page.component';
import { HistoryPageComponent } from './history-page/history-page.component';
import { PlanningPageComponent } from './planning-page/planning-page.component';
import { RecordsPageComponent } from './records-page/records-page.component';
import { BillCardComponent } from './bill-page/bill-card/bill-card.component';
import { CurrencyCardComponent } from './bill-page/currency-card/currency-card.component';


@NgModule({
  declarations: [
    BuhComponent,
    BillPageComponent,
    HistoryPageComponent,
    PlanningPageComponent,
    RecordsPageComponent,
    BillCardComponent,
    CurrencyCardComponent,
  ],
  imports: [
    CommonModule,
    BuhRoutingModule
  ]
})
export class BuhModule { }
