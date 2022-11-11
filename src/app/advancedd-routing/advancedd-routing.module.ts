import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { RoutingOneComponent } from './routing-one/routing-one.component';
import { TestingResolver } from './testing.resolver';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './post.service';
const routes: Route[] = [{
  path: '', component: RoutingOneComponent,
  resolve: {
    posts: TestingResolver
  }
}]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  providers: [
    PostService,
    TestingResolver
  ]
})
export class AdvanceddRoutingModule { }
