import React from 'react'
import * as ReactDOM from "react-dom/client";


import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root,{loader as rootLoader} from "./routes/root.jsx";
import ErrorPage from "./error-page.jsx";
import Contact from "./routes/contact.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement:<ErrorPage/>,
        loader: rootLoader,
        children: [
            {
                path: "contacts/:contactId",
                element: <Contact />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
