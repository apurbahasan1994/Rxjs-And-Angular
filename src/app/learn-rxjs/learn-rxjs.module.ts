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
    path: 'join-creation', loadChildren: () => import('./join-creation/join-creation.module').then(m => m.JoinCreationModule)
  },
  {
    path: 'pipeable', loadChildren: () => import('./pipeable/pipeable.module').then(m => m.PipeableModule)
  },
  {
    path: 'transformation', loadChildren: () => import('./transformation/transformation.module').then(m => m.TransformationModule)
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
