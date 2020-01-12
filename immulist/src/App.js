import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./styles.css";

import SplashScreen from './SplashScreen';
import DashBoard from './DashBoard';
import Header from './Header';

class App extends React.Component{
    render(){
        return (
            <BrowserRouter>
            <div className="ImmuApp">
                <Header/>
                <Switch>
                <Route path="/" component={SplashScreen} exact/>
                <Route path="/dashboard" component={DashBoard} exact/>
                </Switch>
            </div> 
            </BrowserRouter>
        );
    }
}

export default App;
