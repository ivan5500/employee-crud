import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudComponent } from './crud.component';



@NgModule({
  declarations: [
    CrudComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CrudComponent
  ]
})
export class CrudModule { }
