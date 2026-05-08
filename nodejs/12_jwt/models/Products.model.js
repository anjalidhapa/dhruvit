import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Product name is required"],
        trim: true,
        maxlength: [200, "Product name cannot exceed 200 characters"],
        index: true
    }, 
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [0, "Price cannot be negative"],
        max: [1000000, "Price cannot exceed 1,000,000"],
        get: v => parseFloat(v.toFixed(2)),
        set: v => parseFloat(v.toFixed(2))
    },
    description: {
        type: String,
        maxlength: [5000, "Description cannot exceed 5000 characters"],
        trim: true
    },
    category: {
        type: [String],
        default: ["uncategorized"],
        index: true,
        validate: {
            validator: function (categories) {
                return categories.length <= 10;
            },
            message: "Cannot have more than 10 categories per product"
        },
        // Add setter to handle normalization
        set: function (categories) {
            if (!categories) return ["uncategorized"];
            if (!Array.isArray(categories)) return ["uncategorized"];
            if (categories.length === 1 && categories[0] === '') return ["uncategorized"];
            return [...new Set(categories)];
        }
    },
    inStock: {
        type: Boolean,
        default: true,
        index: true
    }
}, {
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    },
    toJSON: { getters: true },
    toObject: { getters: true }
});

const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema);
export default Product;