import { Purchase } from '../model/purchase';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { User } from '../model/user';
import { Product } from '../model/product';
import { Address } from '../model/address';

@Injectable({providedIn:'root'})
export class PurchaseRepository{
   
   constructor(private storage: Storage) { }

   public setProducts(products: Product[]){
      this.storage.set('products', products);
   }
   public getProducts()  : Promise<Product[] > {
      return this.storage.get('products');
   }
   public setAddress(address: Address){
      this.storage.set('address', address);
   }
   public getAddress() : Promise<Address> {
      return this.storage.get('address');
   }
   public setUser(user: User){
      this.storage.set('user',user);
   }
   public getUser() : Promise<User> {
      return this.storage.get('user');
   }
}