import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import { DataUser } from '../components/DataUser';
import { CreandoTabla } from '../components/CreandoTabla';


export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path='/' component={CreandoTabla} />
                    <Route path='/DataUser/:id' component={DataUser} />
                   
                </Switch>
            </div>
        </Router>
    )
}
