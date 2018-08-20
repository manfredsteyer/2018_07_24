import { PaymentCustomerAService } from './payment-customer-a.service';
import { NgModule } from '@angular/core';
import { PaymentLibCustomerAComponent } from './payment-lib-customer-a.component';
import { ContainerComponent } from '../../../payment-lib/src/lib/container/container.component';
import { NonCustomizedComponent } from '@internal/payment-lib/non-customized/non-customized.component';
import { PaymentService } from '@internal/payment-lib/payment.service';

@NgModule({
  imports: [
  ],
  providers: [
    {provide: PaymentService, useClass: PaymentCustomerAService }
  ],
  declarations: [
    PaymentLibCustomerAComponent, 
    ContainerComponent, 
    NonCustomizedComponent
  ],
  exports: [ContainerComponent]
})
export class PaymentLibModule { }
