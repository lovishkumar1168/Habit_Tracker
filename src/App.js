import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import WeekView from "./components/WeekView/WeekView";

function App() {

  const router = createBrowserRouter([
    {path : "/",element:<Navbar/>,children:[
      {index:true,element:<Home/>},
      {path : "/week-view",element:<WeekView/>}
    ]}
  ])
  return (
    <>
      <RouterProvider router={router}>
      </RouterProvider>
    </>
  );
}

export default App;
