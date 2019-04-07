import { Injectable } from "@angular/core";
import { Cart } from "./cart.model";
@Injectable()
export class Order {
   public id: number;
   public firstName: string;
   public lastName: string;
   public billing: {
      address: string,
      city: string,
      state: string,
      zip: string,
      country: string,
   }
   public mailing: {
      address: string,
      city: string,
      state: string,
      zip: string,
      country: string,
   }
   public address: string;
   public city: string;
   public state: string;
   public zip: string;
   public country: string;
   public shipped: boolean = false;

   constructor(public cart: Cart) { }

   clear() {
      //need to refactor this below at a later time to erase everything
      this.id = null;
      this.firstName = this.address = this.city = null;
      this.lastName = this.address = this.city = null;
      this.state = this.zip = this.country = null;
      this.shipped = false;
      this.cart.clear();
   }
}
