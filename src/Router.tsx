import React from "react";
import SenDoLayout from "./layouts/SenDoLayout";
import { useRoutes } from "react-router-dom";
import ProductList from "./pages/productList/ProductList";

const Router = () => {
  const routeElements = useRoutes([
    {
      path: "/clone-sendo",
      element: (
        <SenDoLayout>
          <ProductList />
        </SenDoLayout>
      ),
    },
  ]);
  return routeElements;
};

export default Router;
