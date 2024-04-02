import React from "react";
import { useQuery } from "react-query";
import { Product } from "./Product";
import { ProductsLayout } from "../Layouts/ProductsLayout";
export const Home = () => {
  const getProducts = async () => {
    const res = await fetch("https://dummyjson.com/products");
    return res.json();
  };
  const {
    data: productData,
    error: productError,
    isLoading: productIsLoading,
  } = useQuery("products", getProducts);

  if (productIsLoading) return <p>Loading...</p>;
  if (productError) return <p>Error</p>;
  return (
    <main>
      <ProductsLayout>
        {productData.products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            thumbnail={product.thumbnail}
            isAddToCart={true}
          />
        ))}
      </ProductsLayout>
    </main>
  );
};
