import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import Home from "./pages/Home.tsx";
import {MainImageLayout} from "./layouts/MainImageLayout/MainImageLayout.tsx";
import {MainLayout} from "./layouts/MainLayout/MainLayout.tsx";
import {CourseContainer} from "./pages/CourseContainer/CourseContainer.tsx";
import {ArticleView} from "./pages/ArticleView/ArticleView.tsx";
import {ArticleReduction} from "./pages/ArticleReduction/ArticleReduction.tsx";
import {ArticleAdding} from "./pages/ArticleAdding/ArticleAdding.tsx";
import {Courses} from "./pages/Courses/Courses.tsx";
import {CourseView} from "./pages/CourseView/CourseView.tsx";
import {CourseEdit} from "./pages/CourseEdit/CourseEdit.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainImageLayout/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "personal_account",
        element: <div>personal_account</div>
      },
    ]
  },
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        path: "/course/:id_course",
        element: <CourseView/>
      },
      {
        path: "/course-edit/:id_course",
        element: <CourseEdit/>
      },
      {
        path: "/course/:id_course",
        element: <CourseContainer/>,
        children: [
          {
            path: "article-view/:id",
            element: <ArticleView/>,
          },
          {
            path: "article-reduction/:id",
            element: <ArticleReduction/>,
          },
          {
            path: "article-add",
            element: <ArticleAdding/>,
          },
        ]
      },
      {
        path: "/courses",
        element: <Courses/>
      }

    ]
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
