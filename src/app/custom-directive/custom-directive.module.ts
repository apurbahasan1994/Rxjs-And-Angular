import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomDirectiveRoutingModule } from './custom-directive-routing.module';
import { CreditCardNumberComponent } from './components/credit-card-number/credit-card-number.component';
import { ParentComponent } from './components/parent/parent.component';
import { CreditCardDirective } from './directives/credit-card.directive';
import { TooltipDirective } from './directives/tooltip.directive';
import { CustomStructuralDirective } from './directives/custom-structural.directive';


@NgModule({
  declarations: [
    CreditCardNumberComponent,
    ParentComponent,
    CreditCardDirective,
    TooltipDirective,
    CustomStructuralDirective
  ],
  imports: [
    CommonModule,
    CustomDirectiveRoutingModule,
  ]
})
export class CustomDirectiveModule { }
