import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemRoutingModule } from './system-routing.module';
import { SystemComponent } from './system.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { DropdownDirective } from './shared/directives/dropdown.directive';
import { InputsModule } from './inputs/inputs.module';
import { ResultsModule } from './results/results.module';
import { BuhModule } from './buh/buh.module';


@NgModule({
  declarations: [
    SystemComponent,
    SidebarComponent,
    HeaderComponent,
    DropdownDirective
  ],
  imports: [
    CommonModule,
    InputsModule,
    ResultsModule,
    BuhModule,
    SystemRoutingModule,
  ]
})
export class SystemModule { }
