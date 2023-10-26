import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home";
import NytStoriesPage from "./pages/nytStories";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/stories",
    element: <NytStoriesPage />,
  },
]);

function App() {
  return (
    <>
        <RouterProvider router={router} />
    </>
  );
}

export default App;
