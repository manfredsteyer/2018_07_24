import { DefaultPaymentService } from './default-payment.service';
import { NonCustomizedComponent } from './non-customized/non-customized.component';
import { ContainerComponent } from './container/container.component';
import { NgModule } from '@angular/core';
import { PaymentLibComponent } from './payment-lib.component';
import { PaymentService } from './payment.service';

@NgModule({
  imports: [
  ],
  providers: [ { provide: PaymentService, useClass: DefaultPaymentService }],
  declarations: [PaymentLibComponent, ContainerComponent, NonCustomizedComponent],
  exports: [PaymentLibComponent, ContainerComponent]
})
export class PaymentLibModule { }
