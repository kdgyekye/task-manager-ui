import React from "react";
import {Link} from 'react-router-dom'

const Sidebar =  (props) => {
    return (
        <aside id="left-panel" className="left-panel">
            <nav className="navbar navbar-expand-sm navbar-default">
                <div id="main-menu" className="main-menu collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li className="active">
                            <Link to="index.html"><i className="menu-icon fa fa-laptop"/>Dashboard </Link>
                        </li>
                        <li className="menu-title">UI elements</li>
                        <li className="menu-item-has-children dropdown">
                            <Link to="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                               aria-expanded="false"> <i className="menu-icon fa fa-cogs"/>Components</Link>
                            <ul className="sub-menu children dropdown-menu">
                                <li><i className="fa fa-puzzle-piece"/><Link to="ui-buttons.html">Buttons</Link></li>
                                <li><i className="fa fa-id-badge"/><Link to="ui-badges.html">Badges</Link></li>
                                <li><i className="fa fa-bars"/><Link to="ui-tabs.html">Tabs</Link></li>

                                <li><i className="fa fa-id-card-o"/><Link to="ui-cards.html">Cards</Link></li>
                                <li><i className="fa fa-exclamation-triangle"/><Link to="ui-alerts.html">Alerts</Link>
                                </li>
                                <li><i className="fa fa-spinner"/><Link to="ui-progressbar.html">Progress Bars</Link>
                                </li>
                                <li><i className="fa fa-fire"/><Link to="ui-modals.html">Modals</Link></li>
                                <li><i className="fa fa-book"/><Link to="ui-switches.html">Switches</Link></li>
                                <li><i className="fa fa-th"/><Link to="ui-grids.html">Grids</Link></li>
                                <li><i className="fa fa-file-word-o"/><Link to="ui-typgraphy.html">Typography</Link></li>
                            </ul>
                        </li>
                        <li className="menu-item-has-children dropdown">
                            <Link to="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                               aria-expanded="false"> <i className="menu-icon fa fa-table"/>Tables</Link>
                            <ul className="sub-menu children dropdown-menu">
                                <li><i className="fa fa-table"/><Link to="tables-basic.html">Basic Table</Link></li>
                                <li><i className="fa fa-table"/><Link to="tables-data.html">Data Table</Link></li>
                            </ul>
                        </li>
                        <li className="menu-item-has-children dropdown">
                            <Link to="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                               aria-expanded="false"> <i className="menu-icon fa fa-th"/>Forms</Link>
                            <ul className="sub-menu children dropdown-menu">
                                <li><i className="menu-icon fa fa-th"/><Link to="forms-basic.html">Basic Form</Link></li>
                                <li><i className="menu-icon fa fa-th"/><Link to="forms-advanced.html">Advanced
                                    Form</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </aside>
    )
}

export default Sidebar