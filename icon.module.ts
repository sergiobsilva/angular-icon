import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IconComponent } from './icon.component';

@NgModule({
  imports: [],
  declarations: [
    IconComponent
  ],
  exports: [
    IconComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class IconModule {}
