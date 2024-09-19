import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import MainPage from "../pages/Main.page";
import AddListingPage from "../pages/addlisting/AddListing.page";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <MainPage />
            },
            {
                path: '/add-listing',
                element: <AddListingPage />
            }
        ]
    },
])