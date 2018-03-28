import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OtherPage } from './other';
import { HeightEffectDirective } from '../../directives/height-effect/height-effect';
import { CustomScrollDirective } from '../../directives/height-effect/custom-scroll.directive';

@NgModule({
  declarations: [
    OtherPage,
    HeightEffectDirective,
    CustomScrollDirective
  ],
  imports: [
    IonicPageModule.forChild(OtherPage),
  ],
})
export class OtherPageModule {}
