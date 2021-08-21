import React, {Fragment} from 'react'

import AccountSummary from "../../components/acount-summary/account-summary.component";

const Dashboard = () => {

    const SummaryTypes =  [
        {count: 35, summary: 'Total Tasks', icon: 'pe-7s-note2', iconColor: 3},
        {count: 15, summary: 'Total Categories', icon: 'pe-7s-menu', iconColor: 2},
        {count: 25, summary: 'Total Completed Tasks', icon: 'pe-7s-check', iconColor: 1},
        {count: 10, summary: 'Total Uncompleted Tasks', icon: 'pe-7s-less', iconColor: 4}
    ]
    return (
        <Fragment>
            <div className='animated-fadeIn'>
                <div className="row">
                    {
                        SummaryTypes.map((type,index) =>(
                            <AccountSummary
                                summary={type.summary}
                                count={type.count}
                                icon={type.icon}
                                iconColor={type.iconColor}
                            />
                        ) )
                    }
                </div>
            </div>
        </Fragment>
    )
}

export default Dashboard