import {
  Directive,
  ElementRef,
  Renderer2,
  OnInit, DoCheck
} from '@angular/core';
import { EventService } from '../../providers/providers';

/**
 * Generated class for the HeightEffectDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[height-effect]' // Attribute selector
})
export class HeightEffectDirective implements OnInit, DoCheck {

  private evS: EventService;
  max: number;
  min: number;

  constructor(private elRef: ElementRef, private render: Renderer2) {
    this.evS = EventService.getInstance();
    this.min = 100;
    this.max = this.min * 3;
  }

  ngDoCheck() {
    this.onScroll();
  }

  ngOnInit() {
    this.evS.rendered.emit('renderizado');
    this.render.setStyle(this.elRef.nativeElement, 'min-height', this.min + 'px');
    this.evS.scroll.subscribe(
      (x: string) => this.onScroll()
    );
  }

  onScroll() {
    const top = this.elRef.nativeElement.getBoundingClientRect().top;
    if (top > 0 && top < this.max) {
      this.render.setStyle(this.elRef.nativeElement, 'height', this.min + ((this.max - top) * 0.2) + 'px');
    }
  }
}
