import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemRoutingModule } from './system-routing.module';
import { SystemComponent } from './system.component';
import { FruitComponent } from './fruit/fruit.component';
import { VegetablesComponent } from './vegetables/vegetables.component';
import { SeedlingsComponent } from './seedlings/seedlings.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';


@NgModule({
  declarations: [
    SystemComponent,
    FruitComponent,
    VegetablesComponent,
    SeedlingsComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    SystemRoutingModule,
  ]
})
export class SystemModule { }
