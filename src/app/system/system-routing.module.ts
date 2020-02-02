import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SystemComponent } from './system.component';
import { InputsComponent } from './inputs/inputs.component';
import { ResultsComponent } from './results/results.component';
import { BuhComponent } from './buh/buh.component';
import { BillPageComponent } from './buh/bill-page/bill-page.component';
import { HistoryPageComponent } from './buh/history-page/history-page.component';
import { PlanningPageComponent } from './buh/planning-page/planning-page.component';
import { RecordsPageComponent } from './buh/records-page/records-page.component';
import { InpFruitComponent } from './inputs/inp-fruit/inp-fruit.component';
import { InpVegetableComponent } from './inputs/inp-vegetable/inp-vegetable.component';
import { InpSeedlingComponent } from './inputs/inp-seedling/inp-seedling.component';
import { ResFruitComponent } from './results/res-fruit/res-fruit.component';
import { ResVegetableComponent } from './results/res-vegetable/res-vegetable.component';
import { ResSeedlingComponent } from './results/res-seedling/res-seedling.component';



const routes: Routes = [
  { path: 'system', component: SystemComponent , children: [
    { path: 'inputs', component: InputsComponent, children: [
      { path: 'fruit', component: InpFruitComponent },
      { path: 'vegetable', component: InpVegetableComponent },
      { path: 'seedling', component: InpSeedlingComponent }
    ] },
    { path: 'results', component: ResultsComponent, children: [
      { path: 'fruit', component: ResFruitComponent },
      { path: 'vegetable', component: ResVegetableComponent },
      { path: 'seedling', component: ResSeedlingComponent }
    ] },
    { path: 'buh', component: BuhComponent, children: [
      { path: 'bill', component: BillPageComponent },
      { path: 'history', component: HistoryPageComponent },
      { path: 'planning', component: PlanningPageComponent },
      { path: 'records', component: RecordsPageComponent }
    ] }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
