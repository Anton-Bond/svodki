import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultsRoutingModule } from './results-routing.module';
import { ResultsComponent } from './results.component';
import { ResFruitComponent } from './res-fruit/res-fruit.component';
import { ResVegetableComponent } from './res-vegetable/res-vegetable.component';
import { ResSeedlingComponent } from './res-seedling/res-seedling.component';

@NgModule({
  declarations: [ResultsComponent, ResFruitComponent, ResVegetableComponent, ResSeedlingComponent],
  imports: [
    CommonModule,
    ResultsRoutingModule
  ]
})
export class ResultsModule { }
