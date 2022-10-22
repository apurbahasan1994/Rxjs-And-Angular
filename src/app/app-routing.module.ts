import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicComponentWrapperComponent } from './dynamic-component-wrapper/dynamic-component-wrapper.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'view-encapsulation',loadChildren:()=>import('./view-encapsulation/view-encapsulation.module').then(m=>m.ViewEncapsulationModule)},
  {path:'dynamic-componenets',component:DynamicComponentWrapperComponent},
  {path:'custom-directives',loadChildren:()=>import('./custom-directive/custom-directive.module').then(m=>m.CustomDirectiveModule)},
  {path:'custom-pipes',loadChildren:()=>import('./custom-pipes/custom-pipes.module').then(m=>m.CustomPipesModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
