"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    constructor(nam, spe, inSt, base, bra) {
        this.name = nam;
        this.specialPrices = spe;
        this.inStock = inSt;
        this.basePrice = base;
        this.brand = bra;
    }
}
exports.default = Product;
