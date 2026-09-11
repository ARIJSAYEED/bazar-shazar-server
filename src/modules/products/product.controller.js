import {
  createProducts,
  deleteProduct,
  getProducts,
} from "./product.service.js";

export const getAllProducts = async (req, res) => {
  const products = await getProducts();

  res.send(products);
};

export const createAProduct = async (req, res) => {
  const productDetails = req.body;
  const result = await createProducts(productDetails);
  res.status(201).send({
    success: true,
    message: "Product created successfully",
    product: result,
  });
};

export const deleteProductController = async (req, res) => {
  // console.log(req.params.id);
  const result = await deleteProduct(req.params.id);
  res.send(result);
};

// export { getAllProducts, createAProduct };
