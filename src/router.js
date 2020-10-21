import React from 'react'
import { HashRouter, Route, Switch, Redirect} from 'react-router-dom'
import Admin from './admin'
import App from './App'
import Login from './pages/login'
import Buttons from './pages/ui/button'
import Modals from './pages/ui/modals'
// // import Loadings from './pages/ui/loadings'
// import Notice from './pages/ui/notice'
// import Tabs from './pages/ui/tabs'
// import Gallery from './pages/ui/gallery'
// import Carousels from './pages/ui/carousel'
// // import FormLogin from './pages/form/login'
// // import FormRegister from './pages/form/register'
// import BasicTable from './pages/table/basicTable'
// import HighTable from './pages/table/highTable'
// import RichText from './pages/rich/index'
import Order from './pages/order/index'
import NoMatch from './pages/noMatch'
export default class IRouter extends React.Component{

    render(){
        return (
            <HashRouter>
                <App>
                  <Route path="/login" component={Login}></Route>
                  <Route path="/" render={() =>
                        <Admin>
                            <Switch>
                               <Route path="/ui/buttons" component={Buttons}></Route>
                               <Route path="/ui/modals" component={Modals}></Route>
                               {/* <Route path="/ui/loadings" component={Loadings}></Route> */}
                               {/* <Route path="/ui/notification" component={Notice}></Route>
                               <Route path="/ui/tabs" component={Tabs}></Route>
                                <Route path="/ui/gallery" component={Gallery}></Route>
                                <Route path="/ui/carousel" component={Carousels}></Route> */}
                                {/* <Route path="/form/login" component={FormLogin}></Route>
                                <Route path="/form/reg" component={FormRegister}></Route> */}
                                {/* <Route path="/table/basic" component={BasicTable}></Route>
                                <Route path="/table/high" component={HighTable}></Route>
                                <Route path="/rich" component={RichText}></Route>
                                <Route component={NoMatch}></Route> */}
                                <Route path="/order" component={Order}></Route>
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