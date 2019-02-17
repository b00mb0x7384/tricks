import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/from";
@Injectable()
export class StaticDataSource {
    private products: Product[] = [
        new Product(1, "Big Breaker Bar", "Tools", "It quite literally breaks anything loose", 30),
        new Product(2, "Electric Ratchet", "Power Tools", "12v Battery Powered 30 ft/lbs Torque", 130),
        new Product(3, "Ballpeen Hammer", "Tools", "Standard Hammer, 3Lbs ", 8.20),
        new Product(4, "Big Freaking Hammer", "Tools", "Get a bigger hammer, the infamous BFH", 100),
        new Product(5, "Standard Ratchet", "Tools", "Product 5 (Tools)", 100),
        new Product(6, "Product 6", "Apparel", "Product 6 (Apparel 2)", 100),
        new Product(7, "Product 7", "Apparel", "Product 7 (Apparel 2)", 100),
        new Product(8, "Product 8", "Apparel", "Product 8 (Apparel 2)", 100),
        new Product(9, "Product 9", "Apparel", "Product 9 (Apparel 2)", 100),
        new Product(10, "Product 10", "Accessory", "Product 10 (Accessory)", 100),
        new Product(11, "Product 11", "Accessory", "Product 11 (Accessory)", 100),
        new Product(12, "Product 12", "Accessory", "Product 12 (Accessory)", 100),
        new Product(13, "Product 13", "Accessory", "Product 13 (Accessory)", 100),
        new Product(14, "Product 14", "Accessory", "Product 14 (Accessory)", 100),
        new Product(15, "Product 15", "Accessory", "Product 15 (Accessory)", 100),
        new Product(16, "Product 16", "Accessory", "Product 16 (Accessory)", 100),
        new Product(17, "Product 17", "Accessory", "Product 17 (Accessory)", 100),
        new Product(18, "Product 18", "Accessory", "Product 18 (Accessory)", 100),
        new Product(19, "Product 19", "Accessory", "Product 19 (Accessory)", 100),
        new Product(20, "Product 20", "Accessory", "Product 20 (Accessory)", 100),
    ];
    getProducts(): Observable<Product[]> {
        return Observable.from([this.products]);
    }
}