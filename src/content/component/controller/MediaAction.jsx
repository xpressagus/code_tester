import React,{ useState} from "react";
import {hot} from "react-hot-loader";


function MediaAction(){
    const handleSubmitNext = (e) =>{
        e.preventDefault();
    }
    const handleSubmitPrev = (e) =>{
        e.preventDefault();
    }
    return(
        <div className="controller__media-action" >
            <div className="media-action-container flex">
                <form className="media-action__prev-btn" onSubmit={handleSubmitPrev}>
                    <input className="btn" type="submit" value="prev"/>
                </form>
                <form className="media-action__next-btn" onSubmit={handleSubmitNext}>
                    <input className="btn" type="submit" value="next"/>
                </form>
                
            </div>
        </div>
    )
}

export default hot(module)(MediaAction);