import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FromOperatorComponent } from './components/from-operator/from-operator.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

const ROUTES:Routes=[
  {
    path:'',component:HomeComponent
  },
  {path:'',children:[
    {
      path:'from',component:FromOperatorComponent
    }
  ]}
]

@NgModule({
  declarations: [
    HomeComponent,
    FromOperatorComponent
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
