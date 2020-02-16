import { SharedComponentsModule } from './components/shared-components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedComponentsModule
  ],
  exports: [SharedComponentsModule]
})
export class SharedModule {
  static forRoot() {
    return {
        ngModule: SharedModule
    };
}
}
