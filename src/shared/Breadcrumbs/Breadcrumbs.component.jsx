import React, {useState} from "react";
import {useLocation} from "react-router-dom";

const Breadcrumbs = ({page}) => {
    return (
        <div className="breadcrumbs">
            <div className="breadcrumbs-inner">
                <div className="row m-0">
                    <div className="col-sm-4">
                        <div className="page-header float-left">
                            <div className="page-title">
                                <h1>Tasks</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="page-header float-right">
                            <div className="page-title">
                                <ol className="breadcrumb text-right">
                                    <li><a href="#">Home</a></li>
                                    <li className='active'>Table</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Breadcrumbs