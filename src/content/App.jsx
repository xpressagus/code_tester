import React,{Component, useState, useEffect} from "react";
import {hot} from "react-hot-loader";

//COMPONENT
import DisplayPreview from "./component/main_display/DisplayPreview";
import TypeSelection from './component/controller/TypeSelection';
import MediaList from './component/controller/MediaList';
import MediaAction from './component/controller/MediaAction';


//CSS
import './css/app-container.css';
import './css/controller.css';
import './css/main-display.css';

function App(){

    const [ mediaListLenght, setMediaListLenght] = useState(6);
    const [ allowedImg, setAllowedImg] = useState(["image/jpeg", "image/png"])
    const [ allowedVid, setAllowedVid] = useState(["video/x-matroska", "video/flv", "video/mp4"])
    const [ mediaFile, setMediaFile] = useState(false);
    const [ mediaPreview, setMediaPreview] = useState(
        {status : false, type : null, fileObj : null}
    );

    const handleChangeFile = (e) => {
        const fileList = e.target.files;
        const tabIndex = e.target.getAttribute('tabindex');
        console.log(tabIndex);
        if(fileList){
            const fileObj = URL.createObjectURL(fileList[0]);
            const fileType = fileList[0].type;
            const fileName = fileList[0].name;
            const fileSize = fileList[0].size;
            console.log(fileType)
            const permitedFileType = allowedImg.concat(allowedVid);
            if( permitedFileType.includes(fileType) === false ){
                return;
            }
            
            let newMediaFile = {id : tabIndex , name : fileName , size : fileSize, type : fileType, fileObj : fileObj, status: true };
            let tmpDataArr = [];
            for(let i = 0; i < mediaListLenght; i++){
                i == tabIndex ? tmpDataArr.push(newMediaFile) : tmpDataArr.push(mediaFile[i]) ;
                
            }
            setMediaPreview({status : true, type : fileType, fileObj : fileObj})
            setMediaFile(tmpDataArr);
        }
    }
    /*
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
    */

    useEffect(() => {
        (()=>{
            let tmpMediaFile = [];
            //USING ID WITH TABS INDEX
            for(let i = 0; i < mediaListLenght; i++){
                tmpMediaFile.push({id : i ,name : null ,size : null, type : null,fileObj : null, status: false })
            }
            setMediaFile(tmpMediaFile)
        })()
    }, [])

    return(
        
        <main className="app-container" >
            <section className="app__main-display" style={{minHeight:'100vh'}}>
            <DisplayPreview 
                allowedImg={allowedImg}
                allowedVid={allowedVid}
                mediaPreview={mediaPreview}
            />
            </section>

            <section className="app__controll-display">
                <div className="controll-display__controller-container flex column">

                    <div className="controll-display__1-section">
                        <TypeSelection />
                    </div>
                    <div className="controll-display__2-section">
                        <MediaList 
                            mediaListLenght={mediaListLenght}
                            handleChangeFile={handleChangeFile}
                            mediaFile={mediaFile}
                            setMediaPreview={setMediaPreview}
                        />
                       
                    </div>
                    <div className="controll-display__3-section">
                        <MediaAction />
                    </div>
                </div>
                
            </section>
        </main>
           
    )
}

export default hot(module)(App);