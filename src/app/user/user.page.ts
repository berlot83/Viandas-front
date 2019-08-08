import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { PurchaseRepository } from '../services/storage.purchase';
import { User } from '../model/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  user_form: FormGroup;
  user: User;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    public purchaseRepository: PurchaseRepository
  ) { }

  ngOnInit() {
    this.user_form = this.formBuilder.group({
      name: new FormControl('', Validators.compose([
        Validators.maxLength(25),
        Validators.minLength(5),
        Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
        Validators.required
      ])),
      lastname: new FormControl('', Validators.compose([
        Validators.maxLength(25),
        Validators.minLength(5),
        Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
        Validators.required
      ])),
      phone: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      alternativePhone: new FormControl(),
      street: new FormControl('', Validators.compose([
        Validators.required,
      ]))
    })
  }
  addUser() {
    this.user = this.user_form.value;
    this.purchaseRepository.setUser(this.user);
    
    this.router.navigate(['/home'])
  }
}
