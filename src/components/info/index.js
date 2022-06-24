import React from "react";

const Info = ({ content, heading, _key, anchor }) => {
    return(
        <div id={anchor} key={_key} className="info text-center">
            <h1>{heading}</h1>
            <div dangerouslySetInnerHTML={{__html: content}}/>
        </div>
    )
}

export default Info