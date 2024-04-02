import React from "react";
import { CartProductState } from "../../state/atoms/CartProductState";
import { useSetRecoilState } from "recoil";

export const Product = ({ id, title, thumbnail, isAddToCart }) => {
  const setCartProductState = useSetRecoilState(CartProductState);


  
  function HandleAddToCart() {
    setCartProductState((prevCartProduct) => [
      ...prevCartProduct,
      { id, title, thumbnail },
    ]);
  }
  function HandleRemoveCart() {
    setCartProductState((prevCartProduct) => prevCartProduct.filter(id !== id));
  }

  return (
    <div className="">
      <div
        key={id}
        className="h-[450px] bg-slate-100 shadow-md overflow-hidden rounded-sm"
      >
        <img
          src={thumbnail}
          alt=""
          className="h-3/4 min-h-3/4 max-h-3/4 object-cover w-full"
        />
        <div className="p-2">
          <h1 className="text-lg text-center py-2">{title}</h1>
          {isAddToCart ? (
            <button
              onClick={HandleAddToCart}
              className="text-center bg-info btn hover:bg-cyan-400 w-full font-bold py-2 rounded-md"
            >
              Add To Cart
            </button>
          ) : (
            <button
              onClick={HandleRemoveCart}
              className="text-center text-slate-100 bg-error hover:bg-rose-500 btn  w-full font-bold py-2 rounded-md"
            >
              Remove
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
