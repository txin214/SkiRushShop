import { CdkStepper } from '@angular/cdk/stepper';
import { Component, Input} from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-checkout-review',
  templateUrl: './checkout-review.component.html',
  styleUrls: ['./checkout-review.component.scss']
})
export class CheckoutReviewComponent{
  @Input() appStepper?: CdkStepper;

  constructor(private cartService: CartService) {}

  createPaymentIntent() {
    this.cartService.createPaymentIntent().subscribe({
      next: () => {
        this.appStepper?.next();
      }
    })
  }

}
