import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { Order } from "./order.model";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/from";
@Injectable()
export class StaticDataSource {
    private products: Product[] = [
        new Product(1, "Big Breaker Bar", "Tools", "It quite literally breaks anything loose", 30),
        new Product(2, "Electric Ratchet", "Power Tools", "12v Battery Powered 30 ft/lbs Torque", 130),
        new Product(3, "Ballpeen Hammer", "Tools", "Standard Hammer, 3Lbs ", 8),
        new Product(4, "Big Freaking Hammer", "Tools", "Get a bigger hammer, the infamous BFH", 100),
        new Product(5, " 3/8 Standard Ratchet", "Tools", "3/8 Drive 8 Inch Handle", 25),
        new Product(6, "Tricks of The Trade Hat", "Apparel", "Standard Vendor Merch. Represent Yo", 100),
        new Product(7, "Tricks of The Trade Shirt ", "Apparel", "Show everyone what you are about with this cool shirt", 100),
        new Product(8, "Tricks of The Trade Iron on badge", "Apparel", "Add some Trick Swag to your coveralls or shirts", 100),
        new Product(9, "Tricks of The Trade Official Mech Shirt", "Apparel", "Official, Certified, Trickster of the Trades", 100),
        new Product(10, "Extra Battery for Electric Ratchet", "Accessories", "For Long workdays or as a backup", 100),
        new Product(11, "Extra Charger For Electric Ratchet", "Accessories", "quickly charge up your batteries", 100),
        new Product(12, "Tricks of The Trade Cup Holders", "Accessories", "Great addition to your toolbox", 100),
        new Product(13, "Glove dispenser", "Accessories", "Magnetic sticks to your toolbox", 100),
        new Product(14, "Ear Protection", "Accessories", "Protect your eardrums", 100),
        new Product(15, "Trick's Air tool Oil", "Accessories", "Trick's Air tool Oil (Accessories)", 100),
        new Product(16, "Coupler for Air Hose", "Accessories", "Coupler for Air Hose (Accessories)", 100),
        new Product(17, "Generic Storage Case", "Accessories", "Generic Storage Case (Accessories)", 100),
        new Product(18, "Foam Organization kit for toolbox drawers", "Accessories", "make custom molds for for your tools using this kit", 100),
        new Product(19, "Bag of rags", "Accessories", "standard Red mechanics rags good for wiping hands etc", 100),
        new Product(20, "1/2 Standard Ratchet", "Tools", "1/2 Drive 10 Inch Handle", 30),
    ];
    getProducts(): Observable<Product[]> {
        return Observable.from([this.products]);
    }

    saveOrder(order: Order): Observable<Order> {
        console.log(JSON.stringify(order));
        return Observable.from([order]);
    }
}