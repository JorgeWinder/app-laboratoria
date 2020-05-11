import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'materialize-css/dist/css/materialize.css'

import Layout from './Layout';
import Home from '../page/Home'
import Login from '../page/Login'
import NotFound from '../page/NotFound'

function App() {
    return (
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route exact path="/home" component={Home} />
                        <Route component={NotFound} />
                    </Switch>
                </Layout>
            </BrowserRouter>

        )
    }

export default App
