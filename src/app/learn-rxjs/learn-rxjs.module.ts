import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';

const ROUTES: Routes = [
  { path: '', component:HomeComponent },
  {
    path: 'creation', loadChildren: () => import('./creation/creation.module').then(m => m.CreationOperatorModule)
  },
  {
    path: 'pipeable', loadChildren: () => import('./pipeable/pipeable.module').then(m => m.PipeableModule)
  }
]

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    SharedModule
  ]
})
export class LearnRxjsModule { }
