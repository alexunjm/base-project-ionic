import { NgModule } from '@angular/core';
import { HeightEffectDirective } from './height-effect/height-effect';
import { CustomScrollDirective } from './height-effect/custom-scroll.directive';
@NgModule({
	declarations: [HeightEffectDirective, CustomScrollDirective],
	imports: [],
  exports: [HeightEffectDirective, CustomScrollDirective]
})
export class DirectivesModule {}
