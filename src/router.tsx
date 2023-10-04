import { createBrowserRouter } from "react-router-dom";
import IndexPage from "./pages/Index";
import AuthPage from "./pages/Auth";
import PostPage from "./pages/Post";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
  },
  {
    path: "/auth",
    element: <AuthPage />,
  },
  {
    path: "/post",
    element: <PostPage />,
  },
]);

export default router;
