import {
    createRoutesFromElements,
    createBrowserRouter,
    Route,
} from "react-router-dom";
import { PageLayout } from "./layouts/page";
import { HomeView } from "./pages/homeview";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<PageLayout />}>
            <Route path="/" element={<HomeView />} />
            {/* <Route path="/me" element={<HomeView />} /> */}
        </Route>
    )
);
