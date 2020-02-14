import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedComponentsRoutingModule } from './shared-components-routing.module';
import { SharedComponentsComponent } from './shared-components.component';


@NgModule({
  declarations: [SharedComponentsComponent],
  imports: [
    CommonModule,
    SharedComponentsRoutingModule
  ]
})
export class SharedComponentsModule { }
