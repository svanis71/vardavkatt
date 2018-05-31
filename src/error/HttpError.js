import React from "react";

export const httpErrorTexts = {
    "404": "",
};

export const HttpError = props => (
    <div className="error-image-container">
        <img
            src={`https://http.cat/${props.statusCode}`}
            alt={httpErrorTexts[props.statusCode]}
        />
    </div>
);
