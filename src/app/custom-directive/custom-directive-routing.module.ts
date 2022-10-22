import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditCardNumberComponent } from './components/credit-card-number/credit-card-number.component';
import { ParentComponent } from './components/parent/parent.component';

const routes: Routes = [
  {path:'',component:CreditCardNumberComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomDirectiveRoutingModule { }
