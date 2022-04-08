import React from "react";
import ReactDom from "react-dom";
import HemisphereDisplay from "./hemisphereDisplay"
import "./css/styles.css"

class App extends React.Component{
    // aca se guarda el valor de la latitud
    state = { latitude : null , errorMessage: ''}
    componentDidMount(){
        // primero se obtiene CurrentLocation y luego se muestra o no.
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ latitude : position.coords.latitude})
            },
            (error) => {
                this.setState({ errorMessage : error.message})
            }
        );
    }

    render(){
        if(this.state.errorMessage && !this.state.latitude){
            return <div> {this.state.errorMessage} </div>
        }  
        if(!this.state.errorMessage && this.state.latitude){
            // se pasa el valor de la latitud como props
            return <div className="container-hemisphere"> <HemisphereDisplay latitude = {this.state.latitude} /> </div>
        }      
        else{
            return  <div> Loading... </div>
        }    
    }
}

ReactDom.render(
    <App />,
    document.querySelector('#root')
)