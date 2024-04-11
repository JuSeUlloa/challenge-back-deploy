"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ProductSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    specialPrices: { type: Object, required: false },
    inStock: { type: Boolean, required: true },
    basePrice: { type: Number, required: true },
    brand: { type: String, required: true }
});
exports.default = (0, mongoose_1.model)("products", ProductSchema, "products");
