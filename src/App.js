import React from "react";
import "./App.css";

import Sidebar from "./components/Sidebar";
import Body from "./components/Body";

export default class App extends React.Component{
    render(){
        return(
            <div className="App">
                <Sidebar />
                <Body />
            </div>
        );
    }
}