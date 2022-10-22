import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class CustomStructuralDirective {
  @Input()
  set myForOf(collection:any[]){
    this.viewContainer.clear();
    collection.forEach((item,index)=>{
      this.viewContainer.createEmbeddedView(this.template,{
        $implicit:item,
        index
      });
    })
  }

  constructor(private viewContainer:ViewContainerRef,private template:TemplateRef<any>) {

   }

}
