import React from 'react'
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";

import Body from '../Body';
import Films from '../Films';
import AboutFilm from '../AboutFilm';
import Hall from '../Hall';
import './index.scss'
import Tickets from '../Tickets';
import PrivateRoute from '../PrivateRoute';

const Container = () => {

    return (
        <div className='container__route'>
            <Router>
                <Route exact path='/' component={Body}/>
                <Route path='/films' component={Films}/>
                <Route path='/aboutfilm/:id' component={AboutFilm}></Route>
                <Route path='/session/:id' component={Hall}></Route>
                <PrivateRoute path='/ticket' component={Tickets}></PrivateRoute>
            </Router>
        </div>
    )
}

export default Container;
