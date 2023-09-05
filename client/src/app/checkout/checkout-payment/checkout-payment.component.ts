import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { CartService } from 'src/app/cart/cart.service';
import { Cart } from 'src/app/shared/models/cart';
import { Address } from 'src/app/shared/models/user';
import { CheckoutService } from '../checkout.service';
import { Stripe, StripeCardCvcElement, StripeCardExpiryElement, StripeCardNumberElement, loadStripe } from '@stripe/stripe-js';

@Component({
  selector: 'app-checkout-payment',
  templateUrl: './checkout-payment.component.html',
  styleUrls: ['./checkout-payment.component.scss']
})
export class CheckoutPaymentComponent implements OnInit{
  @Input() checkoutForm?: FormGroup;
  @ViewChild('cardNumber') cardNumberElement?: ElementRef;
  @ViewChild('cardExpiry') cardExpiryElement?: ElementRef;
  @ViewChild('cardCvc') cardCvcElement?: ElementRef;
  stripe: Stripe | null = null;
  cardNumber?: StripeCardNumberElement;
  cardExpiry?: StripeCardExpiryElement;
  cardCvc?: StripeCardCvcElement;
  cardNumberComplete = false;
  cardExpiryComplete = false;
  cardCvcComplete = false;
  cardErrors: any;
  loading = false;

  constructor(private cartService: CartService, private checkoutService: CheckoutService, private router: Router) {}
  ngOnInit(): void {
    loadStripe('pk_test_51NmnBuGzoYYwC7kC24fzNpGiVYpCnbV5YSSG0rf0uywfnMhBP2KNWDKkMStvK8LXNJE609bzwCo6WYznUDg8BeEN00DFf63cEB').then(stripe => {
      this.stripe = stripe;
      const elements = stripe?.elements();
      if (elements) {
        this.cardNumber = elements.create('cardNumber');
        this.cardNumber.mount(this.cardNumberElement?.nativeElement);
        this.cardNumber.on('change', event => {
          this.cardNumberComplete = event.complete;
          if (event.error) this.cardErrors = event.error.message;
          else this.cardErrors = null;
        })

        this.cardExpiry = elements.create('cardExpiry');
        this.cardExpiry.mount(this.cardExpiryElement?.nativeElement);
        this.cardExpiry.on('change', event => {
          this.cardExpiryComplete = event.complete;
          if (event.error) this.cardErrors = event.error.message;
          else this.cardErrors = null;
        })

        this.cardCvc = elements.create('cardCvc');
        this.cardCvc.mount(this.cardCvcElement?.nativeElement);
        this.cardCvc.on('change', event => {
          this.cardCvcComplete = event.complete;
          if (event.error) this.cardErrors = event.error.message;
          else this.cardErrors = null;
        })
      }
    })
  }

  get paymentFormComplete() {
    return this.checkoutForm?.get('paymentForm')?.valid 
      && this.cardNumberComplete 
      && this.cardExpiryComplete 
      && this.cardCvcComplete
  }
  submitOrder() {
    const cart = this.cartService.getCurrentCartValue();
    if (!cart) return;
    const orderToCreate = this.getOrderToCreate(cart);
    if (!orderToCreate) return;
    this.checkoutService.createOrder(orderToCreate).subscribe({
    next: order => {
      this.stripe?.confirmCardPayment(cart.clientSecret!,{
        payment_method:{
          card: this.cardNumber!,
          billing_details:{
            name: this.checkoutForm?.get('paymentForm')?.get('nameOnCard')?.value
          }
        }
      }).then(result=>{
        console.log(result);
        if(result.paymentIntent){
        this.cartService.deleteCart(cart);
        const navigationExtras: NavigationExtras = {state: order};
        this.router.navigate(['checkout/success'], navigationExtras);
        }
      })
    }
    })
  }

  private getOrderToCreate(cart: Cart) {
    const deliveryMethodId = this.checkoutForm?.get('deliveryForm')?.get('deliveryMethod')?.value;
    const shipToAddress = this.checkoutForm?.get('addressForm')?.value as Address;
    if (!deliveryMethodId || !shipToAddress) return;
    return {
      basketId: cart.id,
      deliveryMethodId: deliveryMethodId,
      shipToAddress: shipToAddress
    }
  }
}