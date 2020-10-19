import React from 'react'
import { HashRouter, Route, Switch, Redirect} from 'react-router-dom'
import Admin from './admin'
import App from './App'
import Login from './pages/login'
import Buttons from './pages/ui/button'
import Modals from './pages/ui/modals'
import Loadings from './pages/ui/loadings'
import Notice from './pages/ui/notice'
import Tabs from './pages/ui/tabs'
import Gallery from './pages/ui/gallery'
import Carousels from './pages/ui/carousel'
import FormLogin from './pages/form/login'
import FormRegister from './pages/form/register'
import BasicTable from './pages/table/basicTable'
import HighTable from './pages/table/highTable'

import NoMatch from './pages/noMatch'
export default class IRouter extends React.Component{

    render(){
        return (
            <HashRouter>
                <App>
                  <Route path="/login" component={Login}></Route>
                  <Route path="/admin" render={() =>
                        <Admin>
                            <Switch>
                               <Route path="/admin/ui/buttons" component={Buttons}></Route>
                               <Route path="/admin/ui/modals" component={Modals}></Route>
                               <Route path="/admin/ui/loadings" component={Loadings}></Route>
                               <Route path="/admin/ui/notification" component={Notice}></Route>
                               <Route path="/admin/ui/tabs" component={Tabs}></Route>
                                <Route path="/admin/ui/gallery" component={Gallery}></Route>
                                <Route path="/admin/ui/carousel" component={Carousels}></Route>
                                <Route path="/admin/form/login" component={FormLogin}></Route>
                                <Route path="/admin/form/reg" component={FormRegister}></Route>
                                <Route path="/admin/table/basic" component={BasicTable}></Route>
                                <Route path="/admin/table/high" component={HighTable}></Route>
                                <Route component={NoMatch}></Route>
                             </Switch>
                            </Admin>
                        }></Route>
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