import express from "express";
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../controller/ProductController.js";

const ProductRouter = express.Router();

// ProductRouter.post("/create", createProduct);
// ProductRouter.get("/list", getProducts);E
// ProductRouter.put("/update/:id", updateProduct);
// ProductRouter.delete("/delete/:id", deleteProduct);

ProductRouter.post("/", createProduct);
ProductRouter.get("/", getProducts);
ProductRouter.put("/:id", updateProduct);
ProductRouter.delete("/:id", deleteProduct);

export default ProductRouter;

// cosmosbvn_db_user TzdPApQodfKfithq

// mongodb+srv://cosmosbvn_db_user:TzdPApQodfKfithq@cls1.wc7ru0n.mongodb.net/?appName=cls1


// IufA74nABmMTeUYO
// mongodb+srv://cosmosbvn_db_user:IufA74nABmMTeUYO@cluster0.atf13fe.mongodb.net/


// demo:- OU4xCeg4ylo9A6j5
// mongodb+srv://cosmosbvn_db_user:OU4xCeg4ylo9A6j5@demfirst.hddvhld.mongodb.net/1