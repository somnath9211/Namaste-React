import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header.jsx";
import Body from "./Components/Body.jsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AboutUs from "./pages/AboutUs.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Error from "./pages/Error.jsx";
import Cart from "./pages/Cart.jsx";
import Resturant from "./pages/Resturant.jsx";




const AppLayout = () => {
  return (
    <div className="app-layout">

      <header>
        <Header />
      </header>
      <main>
        <Outlet /> {/* This is where the child routes will be rendered */}
      </main>
      <footer>
        <p>&copy; 2023 My App</p>
      </footer>

    </div>
  );
}

// Create a router for the application
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <AboutUs />
      },
      {
        path: "/contact",
        element: <ContactUs />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/resturant/:resId",
        element: <Resturant />
      }
    ],
    errorElement: <Error /> // Error element for the main route
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);


