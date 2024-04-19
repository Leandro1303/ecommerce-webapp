import { useEffect, useState } from "react";

import {
  deleteProduct,
  getProducts,
} from "../../utils/MongoDB/MongoDB.utils";

import ProductField from "../../componentes/product-field/product-field.component"; // Importa el componente ProductList

const ListProduct = () => {
  const [allproducts, setAllProducts] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);

  const fetchInfo = async () => {
    setIsLoading(true);
    try {
      const response = await getProducts();
      setAllProducts(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const remove_product = async (id) => {
    setIsLoading(true);
    try {
      await deleteProduct(id);
      await fetchInfo();
    } catch (error) {
      console.error("Error removing product:", error);
    }
    setIsLoading(false);
  };

  return (
    <ProductField allproducts={allproducts} loading={isLoading} removeProduct={remove_product} />
  );
};

export default ListProduct;
