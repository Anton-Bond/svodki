import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemRoutingModule } from './system-routing.module';
import { SystemComponent } from './system.component';
import { FruitComponent } from './fruit/fruit.component';
import { VegetablesComponent } from './vegetables/vegetables.component';
import { SeedlingsComponent } from './seedlings/seedlings.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { DropdownDirective } from './shared/directives/dropdown.directive';


@NgModule({
  declarations: [
    SystemComponent,
    FruitComponent,
    VegetablesComponent,
    SeedlingsComponent,
    SidebarComponent,
    HeaderComponent,
    DropdownDirective
  ],
  imports: [
    CommonModule,
    SystemRoutingModule,
  ]
})
export class SystemModule { }
