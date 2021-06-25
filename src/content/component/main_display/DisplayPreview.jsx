import React,{ useState, useEffect} from "react";

function DisplayPreview(props){
    const {allowedImg, allowedVid, mediaPreview} = props;
    const renderDisplayPreview = () => {
        if(allowedImg.includes(mediaPreview.type) == true){
            return(<img src={mediaPreview.fileObj} style={{width:'100%'}} />)
        }else if(allowedVid.includes(mediaPreview.type) == true){
            return(
                <video width="100%" height="500" controls >
                    <source src={mediaPreview.fileObj} type={mediaPreview.type}/>
                </video>
            )
        }else{
            return(
                <div className="default-preview"></div>
            )
        }
    }
    return(
        <div className="main-display__preview-container">
            <div className="preview-box">
                { renderDisplayPreview()}
            </div>
        </div>
    )
}

export default DisplayPreview;