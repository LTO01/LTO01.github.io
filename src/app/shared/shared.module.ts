import { MainNavComponent } from './main-nav/main-nav.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedMaterialModule } from './shared-material.module';



@NgModule({
  declarations: [MainNavComponent],
  imports: [
    CommonModule,
    SharedMaterialModule
  ],
  exports: [MainNavComponent]
})
export class SharedModule { }
