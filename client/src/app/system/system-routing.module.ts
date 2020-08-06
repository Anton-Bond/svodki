import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SystemComponent } from './system.component';
import { InputsComponent } from './inputs/inputs.component';
import { ResultsComponent } from './results/results.component';
import { InpFruitComponent } from './inputs/inp-fruit/inp-fruit.component';
import { InpVegetableComponent } from './inputs/inp-vegetable/inp-vegetable.component';
import { InpSeedlingComponent } from './inputs/inp-seedling/inp-seedling.component';
import { ResFruitComponent } from './results/res-fruit/res-fruit.component';
import { ResVegetableComponent } from './results/res-vegetable/res-vegetable.component';
import { ResSeedlingComponent } from './results/res-seedling/res-seedling.component';
import { EndPageComponent } from './inputs/end-page/end-page.component';

const routes: Routes = [
  { path: 'system', component: SystemComponent , children: [
    { path: 'inputs', component: InputsComponent, children: [
      { path: 'fruit', component: InpFruitComponent },
      { path: 'vegetable', component: InpVegetableComponent },
      { path: 'seedling', component: InpSeedlingComponent },
      { path: 'endPage', component: EndPageComponent },
    ] },
    { path: 'results', component: ResultsComponent, children: [
      { path: 'fruit', component: ResFruitComponent },
      { path: 'vegetable', component: ResVegetableComponent },
      { path: 'seedling', component: ResSeedlingComponent }
    ] },
  ],},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
