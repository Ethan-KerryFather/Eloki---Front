import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Loan from "./pages/loan/LoanPage";
import ElokiPage from "./pages/ilp/ElokiPage";
import StakePage from "./pages/stake/StakePage";
import SwapPage from "./pages/swap/SwapPage";
import PoolPage from "./pages/pool/PoolPage";
import MainInvestment from "./pages/Investment/MainInvestment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/ilp",
    element: <ElokiPage />,
  },
  {
    path: "/loan",
    element: <Loan />,
  },
  {
    path: "/stake",
    element: <StakePage />,
  },
  {
    path: "/swap",
    element: <SwapPage />,
  },
  {
    path: "/pool",
    element: <PoolPage />,
  },
  {
    path: "/investment",
    element: <MainInvestment />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <RouterProvider router={router} />
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
