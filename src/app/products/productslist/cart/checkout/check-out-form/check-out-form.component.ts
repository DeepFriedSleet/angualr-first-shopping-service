import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { createAddressValidator, createCardNameValidator, createCardNumberValidator, createCityValidator, createCVVValidator, createExpirationDateValidator, createNameValidator, createStateValidator, createZIPValidator } from './createValidators';
import { Subscription } from 'rxjs';
import { ResetService } from '../../../../../reset.service';

const nameValidator = createNameValidator();
const addressValidator = createAddressValidator();
const cityValidator = createCityValidator();
const stateValidator = createStateValidator();
const zipValidator = createZIPValidator();
const cardNameValidator = createCardNameValidator();
const cardNumberValidator = createCardNumberValidator();
const expirationDateValidator = createExpirationDateValidator();
const cvvValidator = createCVVValidator();

@Component({
  selector: 'app-check-out-form',
  standalone: false,
  templateUrl: './check-out-form.component.html',
  styleUrl: './check-out-form.component.css'
})
export class CheckOutFormComponent implements OnInit, OnDestroy {

  checkOutForm = new FormGroup({
    checkOutFirstName: new FormControl('', [Validators.required, nameValidator]),
    checkOutLastName: new FormControl('', [Validators.required, nameValidator]),
    checkOutEmail: new FormControl('', [Validators.required, Validators.email]),
    checkOutAddress1: new FormControl('', [Validators.required, addressValidator]),
    checkOutAddress2: new FormControl('', [Validators.required, addressValidator]),
    checkOutCity: new FormControl('', [Validators.required, cityValidator]),
    checkOutState: new FormControl('', [Validators.required, stateValidator]),
    checkOutZIP: new FormControl('', [Validators.required, zipValidator]),
    checkOutCardName: new FormControl('', [Validators.required, cardNameValidator]),
    checkOutCardNumber: new FormControl('', [Validators.required, cardNumberValidator]),
    checkOutExpirationDate: new FormControl('', [Validators.required, expirationDateValidator]),
    checkOutCVV: new FormControl('', [Validators.required, cvvValidator]),
  });

  private subscription = new Subscription();

  constructor(private resetService: ResetService) { }

  ngOnInit(): void {
    this.subscription.add(
      this.resetService.reset$.subscribe(() => this.checkOutForm.reset())
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
