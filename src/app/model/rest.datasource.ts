import { Injectable } from "@angular/core";
import { Http, Request, RequestMethod } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Product } from "./product.model";
import { Cart } from "./cart.model";
import { Order } from "./order.model";
import "rxjs/add/operator/map";

const PROTOCOL = "http";
const PORT = 3500;
const products: Product[] = [
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
@Injectable()
export class RestDataSource {
    baseUrl: string;
    auth_token: string;

    constructor(private http: Http) {
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }
    authenticate(user: string, pass: string): Observable<boolean> {
        return this.http.request(new Request({
            method: RequestMethod.Post,
            url: this.baseUrl + "login",
            body: { name: user, password: pass }
        })).map(response => {
            let r = response.json();
            this.auth_token = r.success ? r.token : null;
            return r.success;
        });
    }

    getProducts(): Observable<any> {
        // return this.sendRequest(RequestMethod.Get, "products");
        //dont need this quite Yet, still very happy with my array ;
        return Observable.from([products]);
    }

    saveProduct(product: Product): Observable<any> {
        return this.sendRequest(RequestMethod.Post, "products",
            product, true);
    }

    updateProduct(product): Observable<any> {
        return this.sendRequest(RequestMethod.Put,
            `products/${product.id}`, product, true);
    }

    deleteProduct(id: number): Observable<any> {
        return this.sendRequest(RequestMethod.Delete,
            `products/${id}`, null, true);
    }

    getOrders(): Observable<any> {
        return this.sendRequest(RequestMethod.Get,
            "orders", null, true);
    }

    deleteOrder(id: number): Observable<any> {
        return this.sendRequest(RequestMethod.Delete,
            `orders/${id}`, null, true);
    }

    updateOrder(order: Order): Observable<any> {
        return this.sendRequest(RequestMethod.Put,
            `orders/${order.id}`, order, true);
    }

    saveOrder(order: Order): Observable<any> {
        return this.sendRequest(RequestMethod.Post, "orders", order);
    }

    private sendRequest(verb: RequestMethod,
        url: string, body?: Product | Order, auth: boolean = false)
        : Observable<Product | Product[] | Order | Order[]> {

        let request = new Request({
            method: verb,
            url: this.baseUrl + url,
            body: body
        });
        if (auth && this.auth_token != null) {
            request.headers.set("Authorization", `Bearer<${this.auth_token}>`);
        }
        return this.http.request(request).map(response => response.json());
    }
}
