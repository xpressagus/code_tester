import React,{Component, useState} from "react";
import {hot} from "react-hot-loader";

//CSS
import './css/app-container.css';
import './css/controller.css';
import './css/main-display.css';
function AppContainer(){

    const [mediaType, setMediaType] = useState('lime');
    const handleChange = (e) => {
        setMediaType(e.target.value);
        console.log(mediaType)
    }
    return(
        <main className="app-container row" >
            <section className="app__main-display" style={{minHeight:'100vh'}}>
                <div className="main-display__preview-container"></div>
            </section>
            <section className="app__controll-display">
                <div className="controll-display__controller-container flex column">
                    <div className="controll-display__1-section">
                        <div className="controller__selection" >
                            <form>
                                <label>
                                    <div>Select Type</div>
                                    <select value={mediaType} onChange={handleChange} style={{color:'black'}}>
                                        <option value="grapefruit">Grapefruit</option>
                                        <option value="lime">Lime</option>
                                        <option value="coconut">Coconut</option>
                                        <option value="mango">Mango</option>
                                    </select>
                                </label>
                            </form>
                        </div>
                    </div>
                    <div className="controll-display__2-section"></div>
                    <div className="controll-display__3-section"></div>
                </div>
                
            </section>
             {/*<img src="./assets/images/1.png" />*/}
        </main>
           
    )
}

export default hot(module)(AppContainer);