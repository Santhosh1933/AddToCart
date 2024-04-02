import { atom } from "recoil";

export const CartProductState = atom({
  key: "CartProductState", // unique ID (with respect to other atoms/selectors)
  default: [], 
});
