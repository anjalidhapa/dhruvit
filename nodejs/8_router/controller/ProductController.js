const createProduct = async (req, res) => {
  // Logic to create a product
  res.send("Product created");
};

const getProducts = async (req, res) => {
  // Logic to get all products
  res.send("List of products");
};

const updateProduct = async (req, res) => {
  // Logic to update a product
  const { id } = req.params;
  res.send(`Product with id ${id} updated`);
};

const deleteProduct = async (req, res) => {
  // Logic to delete a product
  const { id } = req.params;
  res.send(`Product with id ${id} deleted`);
};

export { createProduct, getProducts, updateProduct, deleteProduct };
