import React from "react";
import CVImageToAdd from "../../img/cvphoto.jpg";

const CvPhoto = () => {
    return (
        <img
            alt="Monaco swimminpool"
            src={CVImageToAdd}
            className="w-60 absolute left-80 top-64 "
        ></img>
    );
};

export default CvPhoto;
