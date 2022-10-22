import { AfterContentInit, Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicFormComponent } from '../dynamic-component/dynamic-form/dynamic-form.component';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-dynamic-component-wrapper',
  templateUrl: './dynamic-component-wrapper.component.html',
  styleUrls: ['./dynamic-component-wrapper.component.scss']
})
export class DynamicComponentWrapperComponent {
  ctx={
    $implicit:'Apurba Hasan',
    location:'Dhaka, Bangladesh'
  };
  component: ComponentRef<DynamicFormComponent>;
  @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef;
  @ViewChild('dynamicViewContainer', { read: ViewContainerRef }) dynamicViewContainer: ViewContainerRef;
  @ViewChild('template') template: TemplateRef<any>;
  title = 'RxjsOperators';
  /**
   *
   */
  constructor(private resolver: ComponentFactoryResolver, private cdref: ChangeDetectorRef) {

  }
  ngAfterViewInit() {
    const authFormFactory = this.resolver.resolveComponentFactory(DynamicFormComponent);
    const createUser=this.entry?.createComponent(DynamicFormComponent);
    createUser.instance.title="Create User"
    this.component = this.entry?.createComponent(DynamicFormComponent);
    this.component.instance.title = 'Login'

    this.dynamicViewContainer.createEmbeddedView(this.template,{
      $implicit:'Apurba Hasan',
      location:'Dhaka, Bangladesh'
    });


    this.cdref.detectChanges();



  }
  ngAfterContentInit() {

  }
  moveConponent(){
    this.entry.move(this.component.hostView,0);
  }
  createUser($event: any) {

  }
  loginUser($event: any) {

  }
  rememberUser(value: boolean) {
    console.log(value)
  }
  onSubmitted($event: any) {
    console.log($event)

  }
  destroy() {
    this.component.destroy();

  }
}
