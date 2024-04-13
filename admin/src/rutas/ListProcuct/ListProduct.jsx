import { useEffect, useState } from "react";
import axios from "axios";
import ProductField from "../../componentes/product-field/product-field.component"; // Importa el componente ProductList

const ListProduct = () => {
  const [allproducts, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    try {
      const response = await axios.get("http://localhost:5555/products");
      setAllProducts(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const remove_product = async (id) => {
    try {
      await axios.delete(`http://localhost:5555/products/${id}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        data: { id: id },
      });
      await fetchInfo();
    } catch (error) {
      console.error("Error removing product:", error);
    }
  };

  return (
    <ProductField allproducts={allproducts} removeProduct={remove_product} />
  );
};

export default ListProduct;
