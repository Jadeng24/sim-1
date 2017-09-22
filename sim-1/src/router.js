import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom';


import Home from './components/Home';
import Shelf from './components/Shelf';
import Bin from './components/Bin';

export default (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/shelf/:shelfid" component={Shelf}/>
        <Route path="/shelf/:binid" component={Bin}/>
        <Route />
    </Switch>
)