import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { CartProductLength } from "../state/selectors/CartProductLength";

export const Navbar = () => {
  const navigate = useNavigate();
  const CartCount = useRecoilValue(CartProductLength);
  return (
    <nav className="w-full bg-info py-6">
      <div className="max-w-6xl mx-auto flex justify-between  items-center px-4">
        <h1 className="text-3xl cursor-pointer" onClick={() => navigate("/")}>
          React Practice
        </h1>
        <div
          className="indicator cursor-pointer"
          onClick={() => navigate("/cart")}
        >
          <span className="indicator-item badge badge-error">{CartCount}</span>
          <FaShoppingCart size={24} />
        </div>
      </div>
    </nav>
  );
};
