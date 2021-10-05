import React, {Fragment, Suspense, lazy} from "react";
import {
    Redirect,
    Route,
    Switch
} from "react-router-dom";
import './App.css';
import './styles/output.css'

//Component Imports
import Sidebar from "./components/Sidebar/Sidebar.component";
import Layout from "./shared/Layout/Layout.component";
import SignIn from "./pages/Signin/signin.component";

function App() {
  return (
    <div className="App" style={{backgroundColor: 'whitesmoke'}}>
        <Switch>
            {/*<Route*/}
            {/*    path={'/'}*/}
            {/*    exact={true}*/}
            {/*    render={() => (*/}
            {/*        <Redirect to='/home' />*/}
            {/*    )}*/}
            {/*/>*/}
            <Route
                exact={true}
                path='/signin'
                component={SignIn}
            />
            {/*<Route*/}
            {/*    exact={true}*/}
            {/*    path='/login'*/}
            {/*    component={LogIn}*/}
            {/*/>*/}
            <Route
                path='/'
                render={() => (
                    <Fragment>
                        <Sidebar />
                        <Layout />
                    </Fragment>
                    )}
            />
        </Switch>

    </div>
  );
}

export default App;
