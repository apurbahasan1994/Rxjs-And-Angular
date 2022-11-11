import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DependencyDetailComponent } from './dependency-detail/dependency-detail.component';
import { Route, RouterModule } from '@angular/router';
import { FoodStoreConfig } from './confi';
import { FoodService } from './food.service';

const routes: Route[] = [{
  path: '', component: DependencyDetailComponent,

}]
@NgModule({
  declarations: [
    DependencyDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DependencyModule {
  static forRoot(config:FoodStoreConfig):ModuleWithProviders<DependencyModule>{
    return {
      ngModule:DependencyModule,
      providers:[
        FoodService
      ]
    }
  }
}
