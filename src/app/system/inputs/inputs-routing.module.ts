import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputsComponent } from './inputs.component';
import { InpFruitComponent } from './inp-fruit/inp-fruit.component';
import { InpVegetableComponent } from './inp-vegetable/inp-vegetable.component';
import { InpSeedlingComponent } from './inp-seedling/inp-seedling.component';

const routes: Routes = [
  { path: 'inputs', component: InputsComponent, children: [
    { path: 'fruit', component: InpFruitComponent },
    { path: 'vegetable', component: InpVegetableComponent },
    { path: 'seedling', component: InpSeedlingComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputsRoutingModule { }
