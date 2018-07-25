import { NonCustomizedComponent } from './non-customized/non-customized.component';
import { ContainerComponent } from './container/container.component';
import { NgModule } from '@angular/core';
import { PaymentLibComponent } from './payment-lib.component';

@NgModule({
  imports: [
  ],
  declarations: [PaymentLibComponent, ContainerComponent, NonCustomizedComponent],
  exports: [PaymentLibComponent, ContainerComponent]
})
export class PaymentLibModule { }