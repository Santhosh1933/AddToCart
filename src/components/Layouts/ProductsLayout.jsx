import React from "react";

export const ProductsLayout = ({ children }) => {
  return (
    <div className="grid mx-auto max-w-6xl px-4 my-4 grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3 ">
      {children}
    </div>
  );
};
