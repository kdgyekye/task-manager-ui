import React from "react";

import {Link} from "react-router-dom";

import './Header.styles.scss'

const Header = (props) => {
    return (
        <header id="header" className="header">
            <div className="top-left" style={{display: 'flex'}}>
                <div className='brand-container'>
                    <span><img src='../../assets/unicorn.svg' alt='logo' className='logo'/></span>
                    <Link to={'/'} ><h4>Unicorn Tasks</h4></Link>
                </div>
                <Link id="menuToggle" className="menutoggle"><i className="fa fa-bars"/></Link>
            </div>
            <div className="top-right">
                <div className="header-menu">
                    <div className="header-left">
                        <button className="search-trigger"><i className="fa fa-search"/></button>
                        <div className="form-inline">
                            <form className="search-form">
                                <input className="form-control mr-sm-2" type="text" placeholder="Search ..."
                                       aria-label="Search"/>
                                <button className="search-close" type="submit"/><i className="fa fa-close"/>
                            </form>
                        </div>

                        <div className="dropdown for-notification">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="notification"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fa fa-bell"/>
                                <span className="count bg-danger">3</span>
                            </button>
                            <div className="dropdown-menu" aria-labelledby="notification">
                                <p className="red">You have 3 Notification</p>
                                <Link className="dropdown-item media" to="#">
                                    <i className="fa fa-check"/>
                                    <p>Server #1 overloaded.</p>
                                </Link>
                                <Link className="dropdown-item media" to="#">
                                    <i className="fa fa-info"/>
                                    <p>Server #2 overloaded.</p>
                                </Link>
                                <Link className="dropdown-item media" to="#">
                                    <i className="fa fa-warning"/>
                                    <p>Server #3 overloaded.</p>
                                </Link>
                            </div>
                        </div>

                        <div className="dropdown for-message">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="message"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fa fa-envelope"/>
                                <span className="count bg-primary">4</span>
                            </button>
                            <div className="dropdown-menu" aria-labelledby="message">
                                <p className="red">You have 4 Mails</p>
                                <Link className="dropdown-item media" to="#">
                                <span className="photo media-left"><img alt="avatar"
                                                                        src="assets/images/avatar/1.jpg"/></span>
                                    <div className="message media-body">
                                        <span className="name float-left">Jonathan Smith</span>
                                        <span className="time float-right">Just now</span>
                                        <p>Hello, this is an example msg</p>
                                    </div>
                                </Link>
                                <Link className="dropdown-item media" to="#">
                                <span className="photo media-left"><img alt="avatar"
                                                                        src="assets/images/avatar/2.jpg"/></span>
                                    <div className="message media-body">
                                        <span className="name float-left">Jack Sanders</span>
                                        <span className="time float-right">5 minutes ago</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                                    </div>
                                </Link>
                                <Link className="dropdown-item media" to="#">
                                <span className="photo media-left"><img alt="avatar"
                                                                        src="assets/images/avatar/3.jpg"/></span>
                                    <div className="message media-body">
                                        <span className="name float-left">Cheryl Wheeler</span>
                                        <span className="time float-right">10 minutes ago</span>
                                        <p>Hello, this is an example msg</p>
                                    </div>
                                </Link>
                                <Link className="dropdown-item media" to="#">
                                <span className="photo media-left"><img alt="avatar"
                                                                        src="assets/images/avatar/4.jpg"/></span>
                                    <div className="message media-body">
                                        <span className="name float-left">Rachel Santos</span>
                                        <span className="time float-right">15 minutes ago</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="user-area dropdown float-right">
                        <Link to="#" className="dropdown-toggle active" data-toggle="dropdown" aria-haspopup="true"
                              aria-expanded="false">
                            <img className="user-avatar rounded-circle" src="assets/images/admin.jpg" alt="User Avatar"/>
                        </Link>

                        <div className="user-menu dropdown-menu">
                            <Link className="nav-link" to="#"><i className="fa fa- user"/>My Profile</Link>

                            <Link className="nav-link" to="#"><i className="fa fa- user"/>Notifications <span
                                className="count">13</span></Link>

                            <Link className="nav-link" to="#"><i className="fa fa -cog"/>Settings</Link>

                            <Link className="nav-link" to="#"><i className="fa fa-power -off"/>Logout</Link>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header