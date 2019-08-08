import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { Address } from '../model/address';
import { PurchaseRepository } from '../services/storage.purchase';

@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})
export class AddressPage implements OnInit {

  address_form: FormGroup;
  user: User;
  address: Address;
  existAddress: Boolean;


  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    public purchaseRepository: PurchaseRepository
  ) {
    purchaseRepository.getUser().then((user) => {
      this.user = user;
    });

    purchaseRepository.getAddress().then((address) => {
      this.address = address;
      if (address)
        this.existAddress = true;
      else
        this.existAddress = false;
    });
  }

  ngOnInit() {
    this.address_form = this.formBuilder.group({
      alternativePhone: new FormControl(),
      street: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      number: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      floor: new FormControl(),
      office: new FormControl(),
      beetweenAddressOne: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      beetweenAddressTwo: new FormControl('', Validators.compose([
        Validators.required,
      ])),
    });
  }

  addAddress() {
    this.address = this.address_form.value;
    this.purchaseRepository.setAddress(this.address);
    if(!this.user)
      this.router.navigate(["/user"]);

  }
}
