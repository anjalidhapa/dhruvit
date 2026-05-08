import express from "express";
import { createProduct, deleteProduct, getProductById, listAllProducts, updateProduct } from "../controllers/Product.controller.js";

const ProductRouter = express.Router()

ProductRouter.post("/", createProduct)

ProductRouter.get("/", listAllProducts)
ProductRouter.get("/:id", getProductById)

ProductRouter.put("/:id", updateProduct)
ProductRouter.delete("/:id", deleteProduct)

export default ProductRouter