import { useState } from 'react';


export default function LikeButton() {

    let [isLiked, setIsLiked] = useState(false);

    let likeStyle = {color: "red"};

    function toggleBtn() {
        setIsLiked(!isLiked);
    }

    return (
        <>
            {/* <p>Value: {isLiked.toString()}</p> */}

            {/* <button onClick={toggleBtn}><i className= {isLiked ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i></button> */}

            <button onClick={toggleBtn}>
                <i 
                    className = {isLiked ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                    style = {isLiked? likeStyle: {}} >
                </i>
            </button>
            
        </>
    )
}