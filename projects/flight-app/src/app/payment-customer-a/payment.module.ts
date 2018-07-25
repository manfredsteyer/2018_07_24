import { AdditionalComponent } from './additional/additional.component';

import { PaymentComponent } from './payment/payment.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NonCustomizedComponent } from './non-customized/non-customized.component';
import { ContainerComponent } from './container/container.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PaymentComponent,
    NonCustomizedComponent,
    ContainerComponent,
    AdditionalComponent
  ],
  exports: [
    ContainerComponent
  ]
})
export class PaymentModule { }
