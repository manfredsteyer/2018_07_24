import { NgModule } from '@angular/core';
import { PaymentLibCustomerAComponent } from './payment-lib-customer-a.component';
import { ContainerComponent } from '../../../payment-lib/src/lib/container/container.component';
import { NonCustomizedComponent } from '../../../payment-lib/src/lib/non-customized/non-customized.component';


@NgModule({
  imports: [
  ],
  declarations: [
    PaymentLibCustomerAComponent, ContainerComponent, NonCustomizedComponent
  ],
  exports: [ContainerComponent]
})
export class PaymentLibModule { }
