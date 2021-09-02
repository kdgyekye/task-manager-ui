import React, {useState} from "react";
import {useLocation} from "react-router-dom";
import {Link} from "react-router-dom";

const Breadcrumbs = ({pages}) => {
    console.log(pages)
    return (
        <div className="breadcrumbs">
            <div className="breadcrumbs-inner">
                <div className="row m-0">
                    <div className="col-sm-4">
                        <div className="page-header float-left">
                            <div className="page-title">
                                <h1>{pages[pages.length-1]}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="page-header float-right">
                            <div className="page-title">
                                <ol className="breadcrumb text-right">
                                    <li><Link to={'/'}>Home</Link></li>
                                    {
                                        pages.map((page) => {
                                            return (
                                                <li className='active'>{page}</li>
                                            )
                                        })
                                    }
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