import React,{ useState, useEffect} from "react";

function MediaList(props){
    const {mediaListLenght, handleChangeFile, mediaFile,setMediaPreview} = props;

    const handleChangeFile_inner = (e) => {
        handleChangeFile(e)
    }
    
    const handleClickMediaItem = (e) =>{
        //triggerring click on hidden input
        const inputFile = e.target.getElementsByTagName('input')[0]
        const tabIndex = e.target.getAttribute('tabindex');
        if(inputFile){
            if(mediaFile[tabIndex].status == true){
                console.log(mediaFile[tabIndex].type )
                setMediaPreview({status : true, type : mediaFile[tabIndex].type , fileObj : mediaFile[tabIndex].fileObj})
            }else{
                inputFile.click()
                console.log(mediaFile)
                
            }
        }
    }

    const renderMediaItems = () => {
        let x = [] ;
        for(let i = 0; i < mediaListLenght; i++){
            const mediaFileText =  mediaFile != false ? mediaFile[i].status == false ? 'upload' : mediaFile[i].name : '';
            x.push(
                <li key={'sas'+ i} className="media-item" >
                    <div className="media-item__container" tabIndex={i}  style={{width:'100%',height:'100%'}} onClick={handleClickMediaItem}>
                        <span className="media-item__text">{mediaFileText}</span>
                        <input type="file" tabIndex={i} onChange={handleChangeFile_inner} hidden={true} />
                    </div>
                </li>
            )
        }
        return x;
    }

    return( 
        <div className="controller__media-list" >
            <div className="media-list-container">
                <ul className="media-list">
                    {renderMediaItems()}
                </ul>
            </div>
        </div>
    )
}

export default MediaList;