import { SharedMaterialModule } from './../shared-material.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderTopComponent } from './header-top/header-top.component';



@NgModule({
  declarations: [HeaderTopComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedMaterialModule
  ],
  exports: [HeaderTopComponent]
})
export class SharedComponentsModule { }
