import { BarComponent } from './bar.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BarComponent
  ],
  exports: [
    BarComponent
  ]
})

export class BarModule { }