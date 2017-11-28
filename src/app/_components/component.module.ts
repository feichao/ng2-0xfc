import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilingChinaComponent } from './filing-china/filing-china.component';

const ComponentList = [
  FilingChinaComponent
];

@NgModule({
  declarations: ComponentList,
  exports: ComponentList,
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
