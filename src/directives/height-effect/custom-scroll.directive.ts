import { EventService } from '../../providers/event.service';
import { Directive,
  ElementRef,
  OnInit } from '@angular/core';

@Directive({
  selector: '[custom-scroll]',
  providers: [EventService]
})
export class CustomScrollDirective implements OnInit {

  scrollerHandle: any;
  ticking: boolean;
  firstTime = true;

  private evS: EventService;

  constructor(private elRef: ElementRef) {
    this.evS = EventService.getInstance();
  }

  ngOnInit() {
    this.evS.rendered.subscribe(
      (x: string) => {
        if(this.firstTime) {

          this.scrollerHandle = this.elRef.nativeElement.getElementsByClassName('scroll-content')[0];
          this.ticking = false;

          this.scrollerHandle.onscroll = () => {

            if(!this.ticking){
              window.requestAnimationFrame(() => {
                this.scrollEventTriggered();
              });
            }

            this.ticking = true;
          };
          this.firstTime = false;
        }
      }

    );

  }

  scrollEventTriggered() {
    this.evS.scroll.emit('scrolling');
    this.ticking = false;
  }
}
