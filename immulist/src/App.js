import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./styles.css";

import SplashScreen from './SplashScreen';
import DashBoard from './DashBoard';
import Header from './Header';
import SignIn from "./SignIn";

class App extends React.Component{
    render(){
        return (
            <BrowserRouter>
            <Header/>
            <div className="ImmuApp">
                <Switch>
                <Route path="/" component={SignIn} exact/>
                <Route path="/dashboard" component={DashBoard} exact/>
                <Route path="/signin" component={SignIn} exact/>
                </Switch>
            </div> 
            </BrowserRouter>
        );
    }
}

export default App;
