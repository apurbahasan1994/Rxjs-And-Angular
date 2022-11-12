import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewEncapsulationRoutingModule } from './view-encapsulation-routing.module';
import { OneComponent } from './components/one/one.component';
import { TwoComponent } from './components/two/two.component';
import { ThreeComponent } from './components/three/three.component';
import { ParentComponent } from './components/parent/parent.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    OneComponent,
    TwoComponent,
    ThreeComponent,
    ParentComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ViewEncapsulationRoutingModule
  ]
})
export class ViewEncapsulationModule { }
