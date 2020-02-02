import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputsRoutingModule } from './inputs-routing.module';
import { InputsComponent } from './inputs.component';
import { InpFruitComponent } from './inp-fruit/inp-fruit.component';
import { InpSeedlingComponent } from './inp-seedling/inp-seedling.component';
import { InpVegetableComponent } from './inp-vegetable/inp-vegetable.component';


@NgModule({
  declarations: [InputsComponent, InpFruitComponent, InpSeedlingComponent, InpVegetableComponent],
  imports: [
    CommonModule,
    InputsRoutingModule
  ]
})
export class InputsModule { }
