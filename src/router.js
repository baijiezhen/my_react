import React from 'react'
import { HashRouter, Route, Switch, Redirect} from 'react-router-dom'
import Admin from './admin'
import App from './App'
import Login from './pages/login'
export default class IRouter extends React.Component{

    render(){
        return (
            <HashRouter>
                <App>
                  <Route path="/login" component={Login}></Route>
                  <Route path="/admin" component={Admin}></Route>
                  {/* <Route path="/login" component={login}></Route> */}
                </App>
                {/* <Home>
                    <Switch>
                        <Route path="/main" render={() =>
                            <Main>
                                <Route path="/main/:value" component={Info}></Route>
                            </Main>
                        }></Route>
                        <Route path="/about" component={About}></Route>
                        <Route exact={true} path="/about/abc" component={About}></Route>
                        <Route path="/topics" component={Topic}></Route>
                        <Route component={NoMatch}></Route>
                    </Switch>
                </Home> */}
            </HashRouter>
        );
    }
}