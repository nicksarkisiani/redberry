import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import MainPage from "../pages/main/Main.page";
import AddListingPage from "../pages/addlisting/AddListing.page";
import ListingPage, {listingLoader} from "../pages/listingPage/Listing.page";

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
            },
            {
                path: "/listing/:id",
                element: <ListingPage />,
                loader: listingLoader
            }
        ]
    },
])