import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CombineLatestComponent } from './components/combine-latest/combine-latest.component';
import { ConcatComponent } from './components/concat/concat.component';
import { ForkjoinComponent } from './components/forkjoin/forkjoin.component';
import { MergeComponent } from './components/merge/merge.component';
import { PartitionComponent } from './components/partition/partition.component';
import { RaceComponent } from './components/race/race.component';
import { ZipComponent } from './components/zip/zip.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const ROUTES:Routes=[
  {
    path:'',component:HomeComponent
  },
  {path:'',children:[
    {
      path:'combineLatest',component:CombineLatestComponent
    },
    {
      path:'concat',component:ConcatComponent
    },
    {
      path:'forkjoin',component:ForkjoinComponent
    },
    {
      path:'merge',component:MergeComponent
    },
    {
      path:'partition',component:PartitionComponent
    },
    {
      path:'race',component:RaceComponent
    },
    {
      path:'zip',component:ZipComponent
    }
  ]}
]

@NgModule({
  declarations: [
    HomeComponent,
    CombineLatestComponent,
    ConcatComponent,
    
    ForkjoinComponent,
         MergeComponent,
         PartitionComponent,
         RaceComponent,
         ZipComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class JoinCreationModule { }
