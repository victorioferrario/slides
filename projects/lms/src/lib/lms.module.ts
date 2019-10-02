import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { LmsComponent } from './lms.component';
import { ELEMENTS_COMPONENTS } from './lms.components';

@NgModule({
  declarations: [LmsComponent, ELEMENTS_COMPONENTS],
  imports: [CommonModule, MaterialModule],
  exports: [CommonModule, MaterialModule, LmsComponent, ELEMENTS_COMPONENTS],
  entryComponents:[ELEMENTS_COMPONENTS]
})
export class LmsModule { }
