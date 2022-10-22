import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomPipesRoutingModule } from './custom-pipes-routing.module';
import { FilesizePipe } from './pipes/filesize.pipe';
import { CustomPipeComponent } from './components/custom-pipe/custom-pipe.component';


@NgModule({
  declarations: [
    FilesizePipe,
    CustomPipeComponent
  ],
  imports: [
    CommonModule,
    CustomPipesRoutingModule
  ]
})
export class CustomPipesModule { }
