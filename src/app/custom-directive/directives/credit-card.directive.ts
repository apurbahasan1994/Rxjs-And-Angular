import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCreditCard]'
})
export class CreditCardDirective {

  constructor(
    private element: ElementRef
  ) {
  }
  @HostBinding('style.border')
  border:string;
  @HostListener('input', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const input=event.target as HTMLInputElement;
    // remove white space
    let trimmed=input.value.replace(/\s+/g,'');

    if(trimmed.length>16){
      trimmed=trimmed.substring(0,16);
    }
    let numbers:any[]=[];
    debugger
    for(let i=0;i<trimmed.length;i+=4){
      numbers.push(trimmed.substring(i,4+i))
    }
    input.value=numbers.join(' ');
    this.border='';
    if(/[^\d]+/.test(trimmed)){
      this.border='1px solid red'
    }
  }

}
