import React from 'react'
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";

import Body from '../Body';
import Films from '../Films';
import PrivateRoute from '../PrivateRoute'

const Container = () => {
return(
    <div>
        <Router>
            <Route exact path='/' component={Body}/>
            <PrivateRoute path="/films" component={Films}/>
        </Router>
    </div>
)}

export default Container;
