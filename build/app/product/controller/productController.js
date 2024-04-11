"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productDao_1 = __importDefault(require("../dao/productDao"));
class ProductController extends productDao_1.default {
    getAllProducts(req, res) {
        ProductController.getProducts(res);
    }
    getProductByUser(req, res) {
        const userId = req.params.idUser;
        const nameProduct = req.params.nameProduct;
        if (userId.length != 0 || nameProduct.length != 0) {
            ProductController.getProductsByname(res, userId, nameProduct);
        }
        else {
            res.status(400).json({ mesage: "Send brand and userid" });
        }
    }
}
const productController = new ProductController();
exports.default = productController;
