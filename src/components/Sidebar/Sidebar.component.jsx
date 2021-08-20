import React from "react";
import {Link, useLocation} from 'react-router-dom'

import './Sidebar.styles.scss'

const Sidebar =  (props) => {
    return (
        <aside id="left-panel" className="left-panel">
            <nav className="navbar navbar-expand-sm navbar-default">
                <div id="main-menu" className="main-menu collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li className={`menu-item ${'/' === useLocation().pathname? 'active-link': ''}`}>
                            <Link to="/"><i className="menu-icon fa fa-laptop"/>Dashboard </Link>
                        </li>
                        <li className="menu-title">COLLECTIONS</li>
                        <li className={`menu-item ${'/tasks' === useLocation().pathname?'active-link': ''}`}>
                            <Link to="/tasks" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                               aria-expanded="false"> <i className="menu-icon fa fa-tasks"/>Tasks</Link>
                        </li>
                        <li className={`menu-item ${'/categories' === useLocation().pathname?'active-link': ''}`}>
                            <Link to="/categories" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                               aria-expanded="false"> <i className="menu-icon fa fa-table"/>Categories</Link>
                        </li>
                        <li className='menu-title'>ADD TO COLLECTIONS</li>
                        <li className={`menu-item ${'/add-task' === useLocation().pathname?'active-link': ''}`}>
                            <Link to="/add-task" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                               aria-expanded="false"> <i className="menu-icon fa fa-plus"/>Add Task</Link>
                        </li>
                        <li className={`menu-item ${'/add-category' === useLocation().pathname?'active-link': ''}`}>
                            <Link to="/" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                                  aria-expanded="false"> <i className="menu-icon fa fa-plus-square"/>Add Category</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </aside>
    )
}

export default Sidebar