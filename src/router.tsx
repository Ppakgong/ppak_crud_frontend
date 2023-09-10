import { createBrowserRouter } from "react-router-dom";
import IndexPage from "./pages/Index";
import AuthPage from "./pages/Auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
  },
  {
    path: "/auth",
    element: <AuthPage />,
  },
]);

export default router;
