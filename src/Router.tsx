import React from "react";
import SenDoLayout from "./layouts/SenDoLayout";
import Sitemap from "./pages/sitemap/Sitemap";
import { useRoutes } from "react-router-dom";
import ProductList from "./pages/productList/ProductList";

const Router = () => {
  const routeElements = useRoutes([
    {
      path: "/",
      element: (
        <SenDoLayout>
          <ProductList />
        </SenDoLayout>
      ),
    },
    {
      path: "/sitemap",
      element: (
        <SenDoLayout>
          <Sitemap />
        </SenDoLayout>
      ),
    },
  ]);
  return routeElements;
};

export default Router;
