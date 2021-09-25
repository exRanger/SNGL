import React from 'react'
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import {Main, About, Settings, NotFound} from '../pages'
import {links} from '../constants/links'
import {Navbar} from '../components'
export const Routing = () => { 
    return (
         (
            <Router>
                <Navbar/>
                <Switch>
                        <Route exact  path={links.main}>                   
                            <Main/>
                        </Route>
                        <Route path={links.about}>                        
                            <About/>
                        </Route>
                        <Route path={links.settings}>   
                            <Settings/>
                        </Route>
                        <NotFound/>
                </Switch>
            </Router>
        )
    )
}
