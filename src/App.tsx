import "./App.css";
import Home from "./pages/home";

import {
  createReactRouter,
  createRouteConfig,
  Link,
  Outlet,
  RouterProvider,
} from "@tanstack/react-router";

const routeConfig = createRouteConfig().createChildren((createRoute) => [
  createRoute({
    path: "/",
    component: Home,
  }),
]);

const router = createReactRouter({ routeConfig });

function App() {
  return (
    <>
      <RouterProvider router={router}>
        <Home />
      </RouterProvider>
    </>
  );
}
export default App;
