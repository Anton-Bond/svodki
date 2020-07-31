import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultsComponent } from './results.component';
import { ResFruitComponent } from './res-fruit/res-fruit.component';
import { ResVegetableComponent } from './res-vegetable/res-vegetable.component';
import { ResSeedlingComponent } from './res-seedling/res-seedling.component';

const routes: Routes = [
  { path: 'results', component: ResultsComponent , children: [
    { path: 'fruit', component: ResFruitComponent },
    { path: 'vegetable', component: ResVegetableComponent },
    { path: 'seedling', component: ResSeedlingComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultsRoutingModule { }
