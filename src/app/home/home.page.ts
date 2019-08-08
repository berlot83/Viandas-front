import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

import { AppServiceManager } from '../services/rest.app';
import { Product } from '../model/product'
import { PurchaseRepository } from '../services/storage.purchase';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  form: FormGroup;
  orders: Product[];
  productOrders: Product[];
  productService: AppServiceManager;
 

  constructor(private productServiceManager: AppServiceManager,
    private router: Router,
    private formBuilder: FormBuilder,
    public purchaseRepository: PurchaseRepository 
    ) {
    this.form = this.formBuilder.group({
      orders: new FormArray([])
    });
    this.productServiceManager.getAllActive().subscribe((listProducts: Product[]) => {
      this.orders = listProducts;
      this.orders.map((o, i) => {
        const control = new FormControl(); // if first item set to true, else false
        (this.form.controls.orders as FormArray).push(control);
      });
    })
  }

  ngOnInit() {
  }

  addCart() {
    this.productOrders = this.form.value.orders
      .map((value: any, index: number) => (value ? this.orders[index] : null))
      .filter((value: any) => value !== null);

   this.purchaseRepository.setProducts(this.productOrders);
    this.router.navigate(["/address"]);
  }
}

