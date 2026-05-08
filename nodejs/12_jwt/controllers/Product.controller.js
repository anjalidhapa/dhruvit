import Product from "../models/Products.model.js";

const createProduct = async (req, res) => {
    try {
        const product = new Product(req.body);
        const savedProduct = await product.save();
        console.log("product", product)

        res.status(201).json({
            success: true,
            msg: "Product created successfully",
            product: savedProduct
        });
    }
    catch (error) {
        console.error("Full error:", error);
        res.status(500).json({
            success: false,
            error: 'Failed to create product'
        });
    }
};

const listAllProducts = async (req, res) => {
    try {
        const allProducts = await Product.find();
        res.status(200).json({
            success: true,
            products: allProducts
        });
    } catch (error) {
        console.error("Full error:", error);
        res.status(500).json({
            success: false,
            error: 'Failed to fetch products'
        });
    }
}

const getProductById = async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({
                success: false,
                error: 'Product not found'
            });
        }
        res.status(200).json({
            success: true,
            product
        });
    } catch (error) {
        console.error("Full error:", error);
        res.status(500).json({
            success: false,
            error: 'Failed to fetch products'
        });
    }
}

const updateProduct = async (req, res) => {

    try {
        const productId = req.params.id;
        const updatedProduct = await Product.findByIdAndUpdate(productId, req.body, { new: true, runValidators: true });
        if (!updatedProduct) {
            return res.status(404).json({
                success: false,
                error: 'Product not found'
            });
        }
        res.status(200).json({
            success: true,
            product: updatedProduct
        });
    } catch (error) {
        console.error("Full error:", error);
        res.status(500).json({
            success: false,
            error: 'Failed to update product'
        });
    }
}

const deleteProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const deletedProduct = await Product.findByIdAndDelete(productId);
        if (!deletedProduct) {
            return res.status(404).json({
                success: false,
                error: 'Product not found'
            });
        }
        res.status(200).json({
            success: true,
            msg: 'Product deleted successfully'
        });
    } catch (error) {
        console.error("Full error:", error);
        res.status(500).json({
            success: false,
            error: 'Failed to delete product'
        });
    }

}


export { createProduct, listAllProducts, getProductById, updateProduct, deleteProduct }