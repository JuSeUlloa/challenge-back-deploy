"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = __importDefault(require("../controller/productController"));
class ProductRoute {
    constructor() {
        this.routerProduct = (0, express_1.Router)();
        this.loadRoutes();
    }
    loadRoutes() {
        this.routerProduct.get("/products", productController_1.default.getAllProducts);
        this.routerProduct.get("/price/:idUser/:nameProduct", productController_1.default.getProductByUser);
    }
}
const productRoute = new ProductRoute();
exports.default = productRoute.routerProduct;
