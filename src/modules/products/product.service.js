import Product from "./product.model.js";

export const getProducts = async () => {
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
