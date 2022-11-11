import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { QuestonsComponent } from './questons/questons.component';
const ROUTES:Routes=[
  {path:'',component:QuestonsComponent}
]
@NgModule({
  declarations: [
    QuestonsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class QuestionsModule { }
