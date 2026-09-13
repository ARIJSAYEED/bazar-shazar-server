import Product from "./product.model.js";

export const getProducts = async (email) => {
  if (email) {
    const products = await Product.find({ ownerEmail: email }).sort({
      createdAt: -1,
    });
    return products;
  }
  return await Product.find().sort({ createdAt: -1 });
};

export const createProducts = (productDetails) => {
  return Product.create(productDetails);
};

export const deleteProduct = async (id) => {
  return Product.deleteOne({
    _id: id,
  });
};

// export { getProducts, createProducts };
