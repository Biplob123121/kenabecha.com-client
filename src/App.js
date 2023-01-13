import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePageHeader from "./Pages/Home/HomePageHeader";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePageHeader />,
    },
  ]);


  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
