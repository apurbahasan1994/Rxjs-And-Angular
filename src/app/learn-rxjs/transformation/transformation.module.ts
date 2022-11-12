import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { BufferComponent } from './components/buffer/buffer.component';
import { BufferCountComponent } from './components/buffer-count/buffer-count.component';
import { BufferTimeComponent } from './components/buffer-time/buffer-time.component';
import { BufferToogleComponent } from './components/buffer-toogle/buffer-toogle.component';
import { BufferWhenComponent } from './components/buffer-when/buffer-when.component';
import { ConcatMapComponent } from './components/concat-map/concat-map.component';
import { ConcatMapToComponent } from './components/concat-map-to/concat-map-to.component';
import { MapComponent } from './components/map/map.component';
import { MapToComponent } from './components/map-to/map-to.component';
import { MergeMapComponent } from './components/merge-map/merge-map.component';
const ROUTES:Routes=[
  {
    path:'',component:HomeComponent
  },
  {path:'',children:[
    {
      path:'buffer',component:BufferComponent
    },
    {
      path:'buffer-count',component:BufferCountComponent
    },
    {
      path:'buffer-time',component:BufferTimeComponent
    },
    {
      path:'buffer-toogle',component:BufferToogleComponent
    },
    {
      path:'buffer-when',component:BufferWhenComponent
    },
    {
      path:'concat-map',component:ConcatMapComponent
    },
    {
      path:'concat-map-to',component:ConcatMapToComponent
    },
    {
      path:'map',component:MapComponent
    },
    {
      path:'map-to',component:MapToComponent
    },
    {
      path:'merge-map',component:MergeMapComponent
    }
  ]}
]


@NgModule({
  declarations: [
    HomeComponent,
    BufferComponent,
    BufferCountComponent,
    BufferToogleComponent,
    BufferWhenComponent,
    BufferTimeComponent,
    MapComponent,
    MapToComponent,
    MergeMapComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
  ]
})
export class TransformationModule { }
