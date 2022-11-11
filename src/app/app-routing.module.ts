import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicComponentWrapperComponent } from './dynamic-component-wrapper/dynamic-component-wrapper.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'view-encapsulation',loadChildren:()=>import('./view-encapsulation/view-encapsulation.module').then(m=>m.ViewEncapsulationModule)},
  {path:'dynamic-componenets',component:DynamicComponentWrapperComponent},
  {path:'custom-directives',loadChildren:()=>import('./custom-directive/custom-directive.module').then(m=>m.CustomDirectiveModule)},
  {path:'custom-pipes',loadChildren:()=>import('./custom-pipes/custom-pipes.module').then(m=>m.CustomPipesModule)},
  {path:'reactive-forms',loadChildren:()=>import('./reactive-forms/reactive-forms.module').then(m=>m.ReactiveAngularFormModule)},
  {path:'routing',loadChildren:()=>import('./advancedd-routing/advancedd-routing.module').then(m=>m.AdvanceddRoutingModule)},
  {path:'dependency-injection',loadChildren:()=>import('./dependency/dependency.module').then(m=>m.DependencyModule)},
  {path:'rxjs',loadChildren:()=>import('./learn-rxjs/learn-rxjs.module').then(m=>m.LearnRxjsModule)},
  {path:'questions',loadChildren:()=>import('./questions/questions.module').then(m=>m.QuestionsModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
