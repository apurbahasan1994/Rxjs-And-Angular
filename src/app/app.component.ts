import { AfterContentInit, Component, ComponentFactory, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicFormComponent } from './dynamic-component/dynamic-form/dynamic-form.component';
import {ChangeDetectorRef } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {

  constructor(private router:Router) {

  }
  ngOnInit(){
    this.router.events.subscribe(event=>{
      // when navihation successfull
      if(event instanceof NavigationEnd){
        console.log(event);
      }
    })
  }

}
