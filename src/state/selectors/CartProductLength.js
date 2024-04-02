import { selector } from "recoil";
import { CartProductState } from "../atoms/CartProductState";

export const CartProductLength = selector({
  key: "CartProductLength", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const product = get(CartProductState);
    return product.length;
  },
});
