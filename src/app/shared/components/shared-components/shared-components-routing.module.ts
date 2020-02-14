import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedComponentsComponent } from './shared-components.component';

const routes: Routes = [{ path: '', component: SharedComponentsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedComponentsRoutingModule { }
