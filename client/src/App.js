import React from 'react';
import LoadHomePage from './components/LoadHomePage';
import LoadCreateEmployee from './components/LoadCreateEmployee';
import LoadGetEmployee from './components/LoadGetEmployee';
import LoadGetAllEmployees from './components/LoadGetAllEmployees';
import LoadUpdateEmployee from './components/LoadUpdateEmployee';
import LoadDeleteEmployee from './components/LoadDeleteEmployee';
import LoadPageNotFound from './components/LoadPageNotFound';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';


export default class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path='/'>
                        <LoadHomePage/>
                    </Route>
                    <Route exact path='/createEmp'>
                        <LoadCreateEmployee/>
                    </Route>
                    <Route exact path='/getEmp'>
                        <LoadGetEmployee/>
                    </Route>
                    <Route exact path='/getAllEmp'>
                        <LoadGetAllEmployees/>
                    </Route>
                    <Route exact path='/updateEmp'>
                        <LoadUpdateEmployee/>
                    </Route>
                    <Route exact path='/deleteEmp'>
                        <LoadDeleteEmployee/>
                    </Route>
                    <Route>
                        <LoadPageNotFound/>
                    </Route>
                </Switch>
            </BrowserRouter>
        );
    }
}