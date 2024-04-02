import React from "react";
import { ProductsLayout } from "../Layouts/ProductsLayout";
import { useRecoilState } from "recoil";
import { CartProductState } from "../../state/atoms/CartProductState";
import { Product } from "../Home/Product";

export const Cart = () => {
  const [cartProduct, setCartProduct] = useRecoilState(CartProductState);
  console.log(cartProduct);
  return (
    <div>
      <h1 className="text-3xl text-center my-4">Cart</h1>
      <ProductsLayout>
        {cartProduct.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            thumbnail={product.thumbnail}
            isAddToCart={false}
          />
        ))}
      </ProductsLayout>
    </div>
  );
};
