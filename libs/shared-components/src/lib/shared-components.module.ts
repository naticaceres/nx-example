import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedBackgroundComponent } from './shared-background/shared-background.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SharedBackgroundComponent],
  exports: [SharedBackgroundComponent],
})
export class SharedComponentsModule {}
