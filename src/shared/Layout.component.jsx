import React, {useState, useEffect, Suspense} from "react";

import {Switch, Route, useLocation} from "react-router-dom";

import Header from '../components/Header/Header.component'

const Layout = () => {
    return (
        <div id='right-panel' className='right-panel'>
            <Header />
        </div>
    )
}

export default Layout