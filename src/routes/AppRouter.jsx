import { useState } from "react";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from "react-router-dom";
import { Login } from "../pages/login/Login";
import GuestRoutes from "./GuestRoutes";
import PrivateRoutes from "./PrivateRoutes";
import { Home } from "../pages/home/Home";
import { NotFound } from "../shared/ui/NotFound/NotFound";
import { Settings } from "../pages/settings/Settings";
import App from "../App";


export const AppRouter = () => {
    const [loggedIn, setLoggedIn] = useState(true);
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<App loggedIn={loggedIn} />}>
                <Route element={<GuestRoutes loggedIn={loggedIn} />}>
                    <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
                </Route>
                <Route element={<PrivateRoutes loggedIn={loggedIn} />}>
                    <Route index path="/" element={<Home />} />
                    <Route path="/settings" element={<Settings setLoggedIn={setLoggedIn} />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Route>           
        )
    );
return <RouterProvider router={router} />;
};
