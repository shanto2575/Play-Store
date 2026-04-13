import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Apps from "../Pages/Apps";
import Home from "../Pages/Home";
import Installation from "../Pages/Installation";
import ErrorElement from "../Error/ErrorElement";
import AppsDetails from "../Pages/AppsDetails";
import Dashboard from "../Pages/Dashboard";

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
                path: '/apps', Component: Apps
            },
            {
                path: '/apps/:id', Component: AppsDetails
            },
            {
                path: '/installation', Component: Installation
            },
            {
                path: '/dashboard', Component: Dashboard
            },

        ],
        errorElement: <ErrorElement></ErrorElement>
    },


])