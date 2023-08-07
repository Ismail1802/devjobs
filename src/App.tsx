import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import ScrollToTop from "./utils/ScrollToTop/ScrollToTop";
import { HomePage } from "./pages/Home/HomePage";
import { DevDetailsPage } from "./pages/DevDetails/DevDetailsPage";
import { ErrorPage } from "./pages/Error/ErrorPage";
import { loader } from "./pages/DevDetails/DevDetailsPage";
const router = createBrowserRouter([
  {
    path: "/devjobs/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/devjobs/:devId",
        id: "dev-detail",
        element: (
          <ScrollToTop>
            <DevDetailsPage />
          </ScrollToTop>
        ),
        loader: loader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
