import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Apps from "../Pages/Apps";
import Home from "../Pages/Home";
import Installation from "../Pages/Installation";
import ErrorElement from "../Error/ErrorElement";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                index: true, Component: Home,
                loader: () => fetch('/data.json')
            },
            {
                path: '/installation', Component: Installation
            },
            {
                path: '/apps', Component: Apps
            },

        ],
        errorElement: ErrorElement
    },


])