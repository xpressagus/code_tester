import React,{ useState} from "react";
import {hot} from "react-hot-loader";

function TypeSelection(){
    
    const [mediaTypeValue, setMediaTypeValue] = useState('lime');
    const [listOFmediaType, setListOfMediaType] = useState([
        {name : 'TikTok', value : 'tittok'},
        {name : 'TakTik', value : 'tattik'},
    ]);

    const renderMEdiaType = () => {
        let x;
        x = listOFmediaType.map((items, index)=> {
            return(<option key={items.name} value={items.value}>{items.name}</option>)
        })
        return x;
    }

    const handleChange = (e) => {
        setMediaTypeValue(e.target.value);
    }

    return(
        <div className="controller__type-selection" >
            <form>
                <label>
                    <div className="label">Select Type</div>
                    <select value={mediaTypeValue} onChange={handleChange} style={{width :'100%'}}>
                        {renderMEdiaType()}
                    </select>
                </label>
            </form>
        </div>
    )
}

export default hot(module)(TypeSelection);