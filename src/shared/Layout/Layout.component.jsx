import React, {
    Fragment,
    Suspense,
    lazy
} from "react";

import './layout.styles.scss'

import {Switch, Route, useLocation} from "react-router-dom";

//Loaders
import SpinnerLoader from "../Loaders/Spinner Loader/SpinnerLoader.component";
import TopBarLoading from "../Loaders/Top Boar Loading/TopBarLoading.component";

import Header from '../../components/Header/Header.component'

import Breadcrumbs from "../Breadcrumbs/Breadcrumbs.component";


import {connect} from "react-redux";
import {updateBreadcrumbs} from "../../store/actions/breadcrumbs.actions";
import breadCrumbs from "../../store/reducers/breadcrumbs.reducer";

//pages
const Dashboard = lazy( () => import('../../pages/Dashboard/Dashboard.component'))
const Tasks = lazy(() => import('../../pages/Tasks/Tasks.component'))
const AddTask = lazy(() => import('../../pages/Add Tasks/AddTasks.component'))
const Categories = lazy(() => import('../../pages/Categories/Categories.component'))

export const LoadingComponent = () => {
    console.log('Loading...')
    return (
        <Fragment>
            <TopBarLoading />
            <SpinnerLoader />
        </Fragment>
    )}

const Layout = ({breadCrumbs}) => {
    console.log('pages: ', breadCrumbs.pages)
    return (
        <div id='right-panel' className='right-panel'>
            <Header />
            <Breadcrumbs pages={breadCrumbs.pages}/>
            <div className='mainContent'>
                <div className="animated fadeIn">
                    <div className='row' style={{paddingTop: '30px'}}>
                        <Suspense fallback={LoadingComponent()}>
                            <Switch>
                                <Route
                                    path='/'
                                    exact={true}
                                    component={Dashboard}
                                />
                                <Route
                                    path='/tasks'
                                    exact={true}
                                    component={Tasks}
                                />
                                <Route
                                    path='/categories'
                                    exact={true}
                                    component={Categories}
                                />
                                <Route
                                    path='/add-task'
                                    exact={true}
                                    component={AddTask}
                                />
                            </Switch>
                        </Suspense>
                    </div>
                </div>
            </div>
            <div className="clearfix"></div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        breadCrumbs: state.breadcrumbsReducer
    }
}


export default connect(mapStateToProps)(Layout)