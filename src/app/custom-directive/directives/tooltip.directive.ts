import { Directive, ElementRef, Input, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTooltip]',
  exportAs:'tooltip'
})
export class TooltipDirective {
  tooltipElement:HTMLElement=document.createElement('div');
  visible=false;
  @Input()
  set toolTip(value:string){
    this.tooltipElement.textContent=value;
  }
  hide(){
    this.tooltipElement.classList.remove('tooltip--active');
  }
  show(){
    this.tooltipElement.classList.add('tooltip--active');
  }

  constructor(private elementRef:ElementRef,private view:ViewContainerRef) {

  }
  ngOnInit(){
    this.tooltipElement.className='tooltip';
    this.elementRef.nativeElement.appendChild(this.tooltipElement);
    this.elementRef.nativeElement.classList.add('tooltip-container')
  }

}
