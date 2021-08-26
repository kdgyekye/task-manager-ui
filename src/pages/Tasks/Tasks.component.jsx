import React, {Fragment} from "react";

import Table from "../../components/Table.component";

const columns = [
    {th: 'ID', field: 'id'},
    {th: 'SUBJECT', field: 'subject'},
    {th: 'CREATED ON', field: 'createdOn'},
    {th: 'STATUS', field: 'status'},
    {th: 'ACTIONS', field: 'actions'},
]

const data = [
    {id: '001', subject: 'Continue Task Manager UI', createdOn: new Date().toLocaleDateString(), status: 'Completed', actions: 'ACTION'},
    {id: '002', subject: 'Go To The Gym', createdOn: new Date().toLocaleDateString(), status: 'Uncompleted', actions: 'ACTION'},
    {id: '003', subject: 'Continue Task Manager UI', createdOn: new Date().toLocaleDateString(), status: "Uncompleted", actions: 'ACTION'},
    {id: '004', subject: 'Go To The Gym', createdOn: new Date().toLocaleDateString(), status: "Completed", actions: 'ACTION'}
]
const Tasks  = () => {
    return (
        <Fragment>
            <div className="animated fadeIn">
                <div className="row">
                    <Table columns={columns} rows={data} tableName={'Your Tasks'} />
                </div>
            </div>
        </Fragment>
    )
}

export default Tasks