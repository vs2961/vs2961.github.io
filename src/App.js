import React from 'react';
import "./App.css";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {imageLoaded: false}
    }
    
    handleImageLoad() {
        this.setState({imageLoaded: true})
    }

    render() {
        return (
            <>
                <div className="fade-in">
                    <img 
                        className="image" 
                        src="autumn.jpg"
                        onLoad={this.handleImageLoad.bind(this)}
                    />
                </div>
                <div className="centered">
                    <h1>Centered</h1>
                </div>
            </>
        );
     }
}
