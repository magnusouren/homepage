import "../App.css";
import CvPhoto from "../components/home/cvphoto";
import Wallpaper from "../components/home/wallpaper";
import { Navbar } from "../components/nav/navbar";

export const HomeView = () => (
    <>
        <Navbar />
        <div className="ml-48 mb-20">
            <Wallpaper></Wallpaper>
            <CvPhoto></CvPhoto>
            <p className="w-96 ml-auto mr-auto mt-12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                ex aspernatur eveniet sapiente ab est ad consectetur, accusamus
                soluta eligendi libero doloribus sequi cumque dignissimos nulla
                perspiciatis praesentium animi alias!
            </p>
            <p className="w-96 ml-auto mr-auto mt-12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                ex aspernatur eveniet sapiente ab est ad consectetur, accusamus
                soluta eligendi libero doloribus sequi cumque dignissimos nulla
                perspiciatis praesentium animi alias!
            </p>
            <p className="w-96 ml-auto mr-auto mt-12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                ex aspernatur eveniet sapiente ab est ad consectetur, accusamus
                soluta eligendi libero doloribus sequi cumque dignissimos nulla
                perspiciatis praesentium animi alias!
            </p>
        </div>
    </>
);
