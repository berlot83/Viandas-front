import { User } from './user';
import { Product } from './product';
import { Address } from './address';

export class Purchase{
    user: User;
  public  products: Product[];
    address: Address;
}