import {
  createProducts,
  deleteProduct,
  getProducts,
} from "./product.service.js";

export const getAllProducts = async (req, res) => {
  const { email } = req.query;
  // console.log(email);
  const products = await getProducts(email);

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
