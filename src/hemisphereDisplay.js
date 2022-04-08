import React from "react";
import northernImg from "./images/northern-hemisphere.png"
import southernImg from "./images/southern-hemisphere.jpg"
//import "./css/styles.css"

const hemisphereTitles ={
    Northen: {
        text: 'It is northern hemisphere',
        picture: northernImg
    },
    Southern: {
        text: 'It is southern hemisphere',
        picture: southernImg
    }
}


const HemisphereDisplay = ({ latitude }) => {

    const hemisphere = latitude > 0 ? 'Northen' : 'Southern'
    const {text, picture} = hemisphereTitles[hemisphere]
    return (
        <div className={ hemisphere }>
            <div className="ui raised text container segment " style={{marginTop:'3em'}}>
                <div className="image">
                    <img src={picture} alt="" />
                </div>
                <div className="ui teal bottom attached label">
                   <h1> {text} </h1> 
                </div>  
            </div>
        </div>
    )
}

export default HemisphereDisplay