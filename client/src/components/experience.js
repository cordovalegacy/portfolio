import React from "react";
import HTMLFlipBook from 'react-pageflip';

const Experience = () => {

    return(
        <HTMLFlipBook style={{backgroundColor: "white"}} width={200} height={100}>
            <div number="1">Page Text</div>
            <div number="2">More Page Text</div>
        </HTMLFlipBook>
    )
}

export default Experience;