"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productSchema_1 = __importDefault(require("../../../schemas/productSchema"));
class ProductDao {
    static getProducts(res) {
        return __awaiter(this, void 0, void 0, function* () {
            productSchema_1.default.find().then((products) => {
                res.status(200).json(products);
            }).catch((err) => {
                res.status(400).json({ mesage: "Failed to get products" });
            });
        });
    }
    static getProductsByname(res, userid, nameProduct) {
        return __awaiter(this, void 0, void 0, function* () {
            productSchema_1.default.find({ name: nameProduct }, { specialPrices: 1, brand: 1, basePrice: 1 }).then((products) => {
                let arregloProductosUsuario = [];
                products.map((product) => {
                    if (product.specialPrices) {
                        let id = Object.keys(product.specialPrices).find((id) => id == userid);
                        if (id) {
                            arregloProductosUsuario.push(product.specialPrices[id]);
                        }
                    }
                    else {
                        arregloProductosUsuario.push(product);
                    }
                });
                res.status(200).json(arregloProductosUsuario);
            }).catch((err) => {
                console.log(err);
                res.status(400).json({ mesage: "Failed to get products" });
            });
        });
    }
}
exports.default = ProductDao;
