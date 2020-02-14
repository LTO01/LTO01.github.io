import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderTopComponent } from './header-top/header-top.component';



@NgModule({
  declarations: [HeaderTopComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderTopComponent]
})
export class SharedModule { }
