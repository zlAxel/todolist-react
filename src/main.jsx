import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// ! ----------------------------------
// ! Importación de componentes

import { Layout } from './components/Layout';
import { Index, loader as loaderTasks } from "./pages/Index";
import { action as actionDeleteTask } from "./components/Tasks";

// ! ----------------------------------
// ! Importación de estilos

import "./assets/css/main.css";

// ! ----------------------------------
// ! Creación de rutas

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Index />,
                loader: loaderTasks
            },
            {
                path: '/tasks/add',
                element: <h1>Tasks Add</h1>
            },
            {
                path: '/tasks/:taskId/edit',
                element: <h1>Tasks Edit</h1>  
            },
            {
                path: '/tasks/:taskId/delete',
                action: actionDeleteTask
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>
  ,
)
