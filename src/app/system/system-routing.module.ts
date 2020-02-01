import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SystemComponent } from './system.component';
import { FruitComponent } from './fruit/fruit.component';
import { VegetablesComponent } from './vegetables/vegetables.component';
import { SeedlingsComponent } from './seedlings/seedlings.component';


const routes: Routes = [
  { path: 'system', component: SystemComponent , children: [
    { path: 'fruit', component: FruitComponent },
    { path: 'vegetables', component: VegetablesComponent },
    { path: 'seedlings', component: SeedlingsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
