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

@NgModule({
  declarations: [
    AppComponent,
    AuthFormComponent,
    AuthRememberComponent,
    DynamicFormComponent,
    DynamicComponentWrapperComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DynamicFormComponent]

})
export class AppModule { }
