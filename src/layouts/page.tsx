import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/nav/navbar";

export const PageLayout: FC = () => (
    <main>
        <Navbar />
        <div className="ml-48 mb-20">
            <Outlet />
        </div>
    </main>
);
