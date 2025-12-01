const Product = require('../models/Product')


// CREATE
const createProduct=async (req,res)=>{
    try {
        const product = await Product.create(req.body)
        res.status(201).json(product)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get single product
const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) return res.status(404).json({ message: "Product not found" });
        res.json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update product
const updateProduct = async (req, res) => {
    try {
        const updated = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updated);
        return res.status(404).json({ message: "Product Updated Now!" });

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// DELETE PRODUCT
const deleteProduct = async (req, res) => {
    try {
        const deleted = await Product.findByIdAndDelete(req.params.id);

        if (!deleted)
            return res.status(404).json({ message: "Product not found" });

        res.json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// GET ALL PRODUCTS
const getAllProducts = async (req, res) => {
    try {
        let query = Product.find();

        // Filtering
        if (req.query.category)
            query = query.where("category").equals(req.query.category);

        if (req.query.minPrice)
            query = query.where("price").gte(req.query.minPrice);

        if (req.query.maxPrice)
            query = query.where("price").lte(req.query.maxPrice);

        // Sorting
        if (req.query.sortBy) {
            const [field, order] = req.query.sortBy.split("_");
            query = query.sort({ [field]: order === "asc" ? 1 : -1 });
        }

        const products = await query;
        res.json(products);

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


module.exports = {createProduct,getAllProducts,getProductById,updateProduct,deleteProduct}