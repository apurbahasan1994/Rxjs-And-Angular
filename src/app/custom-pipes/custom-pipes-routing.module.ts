import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomPipeComponent } from './components/custom-pipe/custom-pipe.component';

const routes: Routes = [
  {path:'',component:CustomPipeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomPipesRoutingModule { }
