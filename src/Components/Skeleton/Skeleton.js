import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import {createBrowserHistory} from 'history'
import classes from './Skeleton.module.css'
import Main from '../Main/Main';
import Details from '../Details/Details'
import Add from '../Add/Add';

const history = createBrowserHistory()

function Skeleton() {
    return (
        <div>
            <Router history={history}>
                <ul className={classes.Navbar}>
                    <li className={classes.NavigationLi}><Link to='/main'>Home</Link></li>
                    <li className={classes.NavigationLi}><Link to='/additem' >Add</Link></li>
                </ul>
                <Switch>
                    <Route exact path='/main' component={Main} />
                    <Route exact path='/additem' component={Add} />
                    <Route exact path='/details/:id' component={Details} />
                    <Redirect to="/main" />
                </Switch>
            </Router>
        </div>
    )
}

export default Skeleton