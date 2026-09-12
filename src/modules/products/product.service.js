import Product from "./product.model.js";

export const getProducts = async (email) => {
  if (email) {
    const products = await Product.find({ ownerEmail: email });
    return products;
  }
  return await Product.find();
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
