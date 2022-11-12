import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FromOperatorComponent } from './components/from-operator/from-operator.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { GenerateComponent } from './components/generate/generate.component';
import { ToarrayComponent } from './components/toarray/toarray.component';
import { TimerComponent } from './components/timer/timer.component';
import { DeferComponent } from './components/defer/defer.component';

const ROUTES:Routes=[
  {
    path:'',component:HomeComponent
  },
  {path:'',children:[
    {
      path:'from',component:FromOperatorComponent
    },
    {
      path:'generate',component:GenerateComponent
    },
    {
      path:'to-array',component:ToarrayComponent
    },
    {
      path:'timer',component:TimerComponent
    },
    {
      path:'defer',component:DeferComponent
    }
  ]}
]

@NgModule({
  declarations: [
    HomeComponent,
    FromOperatorComponent,
    GenerateComponent,
    ToarrayComponent,
    DeferComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    SharedModule,
    MatButtonModule,
    MatButtonToggleModule
  ]
})
export class CreationOperatorModule { }
