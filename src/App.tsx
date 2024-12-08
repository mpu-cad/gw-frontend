//import Home from './pages/Home'
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import Home from "./pages/Home.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/personal_account",
    element: <div>personal_account</div>
  },
  {
    path: "/",
    element: <Home/>
  },

])
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
