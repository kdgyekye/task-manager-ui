import React from 'react'

const AccountSummary = ({summary,count}) => {
    return (
        <div className="col-lg-6 col-md-6">
            <div className="card text-white bg-flat-color-3">
                <div className="card-body">
                    <div className="stat-widget-five">
                        <div className="stat-icon dib flat-color-3">
                            <i className="pe-7s-note2"></i>
                        </div>
                        <div className="stat-content">
                            <div className="text-left dib">
                                <div className="stat-text">$<span className="count">{count}</span></div>
                                <div className="stat-heading">{summary}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountSummary