import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: 'shared/components/shared-components', loadChildren: () => import('./shared/components/shared-components/shared-components.module').then(m => m.SharedComponentsModule) }, { path: 'shared/shared', loadChildren: () => import('./shared/shared/shared.module').then(m => m.SharedModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
