import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/nav/navbar";

export const PageLayout: FC = () => (
    <main>
        <Navbar />
        <Outlet />
    </main>
);
