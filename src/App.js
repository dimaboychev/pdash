import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./containers/Home";
import Contact from "./containers/Contact";
import NotFound from "./containers/NotFound";
import HotlineCalls from "./containers/HotlineCalls";

function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/reports/hotline-calls" component={HotlineCalls}/>
                    <Route component={NotFound}/>
                </Switch>
            </Router>
        </>
    );
}

export default App;
