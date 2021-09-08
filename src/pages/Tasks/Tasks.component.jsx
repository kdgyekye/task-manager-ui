import React, {Fragment, useEffect} from "react";

import Table from "../../components/Table/Table.component";
import {updateBreadcrumbs, resetBreadcrumbs} from "../../store/actions/breadcrumbs.actions";

import {connect} from "react-redux";

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
const Tasks  = (props) => {

    useEffect(() => {
        document.title = 'Tasks - Unicorn Task Manager'
    })

    useEffect(() => {
        resetBreadcrumbs()
        props.updateBreadcrumbs('Tasks')
    }, [])


    return (
        <Fragment>
            <Table columns={columns} rows={data} tableName={'Your Tasks'} />
        </Fragment>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateBreadcrumbs: (pages) => dispatch(updateBreadcrumbs(pages)),
        resetBreadcrumbs: dispatch(resetBreadcrumbs())
    }
}

export default connect(null, mapDispatchToProps)(Tasks)