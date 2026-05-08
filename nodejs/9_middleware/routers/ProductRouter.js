import express from "express";
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../controller/ProductController.js";

const ProductRouter = express.Router();

// ProductRouter.post("/create", createProduct);
// ProductRouter.get("/list", getProducts);
// ProductRouter.put("/update/:id", updateProduct);
// ProductRouter.delete("/delete/:id", deleteProduct);

ProductRouter.post("/", createProduct);
ProductRouter.get("/", getProducts);
ProductRouter.put("/:id", updateProduct);
ProductRouter.delete("/:id", deleteProduct);

export default ProductRouter;
