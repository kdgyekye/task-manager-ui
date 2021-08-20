import React, {Fragment} from 'react'

const Dashboard = () => {
    return (
        <Fragment>
            <div className='animated-fadeIn'>
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="stat-widget-five">
                                    <div className="stat-icon dib flat-color-3">
                                        <i className="pe-7s-note2"></i>
                                    </div>
                                    <div className="stat-content">
                                        <div className="text-left dib">
                                            <div className="stat-text">$<span className="count">35</span></div>
                                            <div className="stat-heading">Total Tasks</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="stat-widget-five">
                                    <div className="stat-icon dib flat-color-2">
                                        <i className="pe-7s-menu"></i>
                                    </div>
                                    <div className="stat-content">
                                        <div className="text-left dib">
                                            <div className="stat-text"><span className="count">15</span></div>
                                            <div className="stat-heading">Categories</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="stat-widget-five">
                                    <div className="stat-icon dib flat-color-1">
                                        <i className="pe-7s-check"></i>
                                    </div>
                                    <div className="stat-content">
                                        <div className="text-left dib">
                                            <div className="stat-text"><span className="count">25</span></div>
                                            <div className="stat-heading">Completed</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="stat-widget-five">
                                    <div className="stat-icon dib flat-color-4">
                                        <i className="pe-7s-less"></i>
                                    </div>
                                    <div className="stat-content">
                                        <div className="text-left dib">
                                            <div className="stat-text"><span className="count">10</span></div>
                                            <div className="stat-heading">Uncompleted Tasks</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Dashboard