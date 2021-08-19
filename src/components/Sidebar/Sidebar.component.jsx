import React from "react";
import {Link} from 'react-router-dom'

import './Sidebar.styles.scss'

const Sidebar =  (props) => {
    return (
        <aside id="left-panel" className="left-panel">
            <nav className="navbar navbar-expand-sm navbar-default">
                <div id="main-menu" className="main-menu collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li className="active-link">
                            <Link to="index.html"><i className="menu-icon fa fa-laptop"/>Dashboard </Link>
                        </li>
                        <li className="menu-title">COLLECTIONS</li>
                        <li className="menu-item-has-children dropdown">
                            <Link to="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                               aria-expanded="false"> <i className="menu-icon fa fa-tasks"/>Tasks</Link>
                        </li>
                        <li className="menu-item-has-children dropdown">
                            <Link to="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                               aria-expanded="false"> <i className="menu-icon fa fa-table"/>Categories</Link>
                        </li>
                        <li className='menu-title'>ADD TO COLLECTIONS</li>
                        <li className="menu-item-has-children dropdown">
                            <Link to="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                               aria-expanded="false"> <i className="menu-icon fa fa-plus"/>Add Task</Link>
                        </li>
                        <li className="menu-item-has-children dropdown">
                            <Link to="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                                  aria-expanded="false"> <i className="menu-icon fa fa-plus-square"/>Add Category</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </aside>
    )
}

export default Sidebar