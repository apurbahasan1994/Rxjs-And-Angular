import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { AuthRememberComponent } from './auth-remember/auth-remember.component';
import { DynamicFormComponent } from './dynamic-component/dynamic-form/dynamic-form.component';
import { DynamicComponentWrapperComponent } from './dynamic-component-wrapper/dynamic-component-wrapper.component';
import { HomeComponent } from './home/home.component';
import { RoutingOneComponent } from './advancedd-routing/routing-one/routing-one.component';
import { API_TOKEN, USER_TOKEN } from './dependency/token';
import { FoodService } from './dependency/food.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [
    AppComponent,
    AuthFormComponent,
    AuthRememberComponent,
    DynamicFormComponent,
    DynamicComponentWrapperComponent,
    HomeComponent,
    RoutingOneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedModule
  ],

  bootstrap: [AppComponent],
  entryComponents: [DynamicFormComponent],
  providers:[
    {
      provide:FoodService,useClass:FoodService
    },
    {provide:API_TOKEN,useValue:'/api/pizzas'},
    {provide:USER_TOKEN,useValue:{
      name:"apurba",
      "emial":'apurbahasam1994'
    }},
    {
      provide :FoodService,useFactory:(api_token:string,user_token:string)=>{
        return new FoodService(api_token,user_token);
      },
      deps:[
        API_TOKEN,
        USER_TOKEN
      ]
    }
  ]

})
export class AppModule { }
