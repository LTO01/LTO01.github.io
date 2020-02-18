import { SharedMaterialModule } from './../shared-material.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideDrawerComponent } from './side-drawer/side-drawer.component';



@NgModule({
  declarations: [SideDrawerComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedMaterialModule
  ],
  exports: [SideDrawerComponent]
})
export class SharedComponentsModule { }
