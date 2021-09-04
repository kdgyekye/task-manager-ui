import React, {Fragment, useEffect} from "react";

import {connect} from "react-redux";
import {resetBreadcrumbs, updateBreadcrumbs} from "../../store/actions/breadcrumbs.actions";

import {TextField,TextArea} from "../../components/Form-Input/form-input.component";
import {withFormik} from "formik";

const fields = [
    {label: 'Description', name: 'description', type: 'text', width: 'col-lg-6'},
    {label: 'Category', name: 'category', type: 'select', width: 'col-lg-6'},
    {label: 'Completed', name: 'completed', type: 'checkbox', width: 'col-lg-6'},
    {label: 'Details', name: 'details', type: 'textarea', width: 'col-lg-12'},
]
const AddTask  = (props) => {

    useEffect(() => {
        document.title = 'Unicorn Tasks - Add Task'
    })

    useEffect(() => {
        resetBreadcrumbs()
        props.updateBreadcrumbs('Add Tasks')
    }, [])

    return (
        <Fragment>
            <div className="col-lg-10">
                <div className="card">
                    {/*<div className="card-header" />*/}
                    <div className="card-body">
                        <div id="pay-invoice">
                            <div className="card-body">
                                <div className="card-title">
                                    <h3 className="text-center">Add New Task</h3>
                                </div>
                                <hr />
                                    <form action="#" method="post" noValidate="novalidate">
                                        {/*{*/}
                                        {/*    fields.map((field, fieldIndex) => {*/}
                                        {/*        return (*/}
                                        {/*            field.type === 'textarea' ?*/}
                                        {/*                <TextArea*/}
                                        {/*                    key={fieldIndex}*/}
                                        {/*                    name={field.name}*/}
                                        {/*                    type={field.type}*/}
                                        {/*                    label={field.label}*/}
                                        {/*                    width={field.width}*/}
                                        {/*                />*/}
                                        {/*                :*/}
                                        {/*                <TextField*/}
                                        {/*                    key={fieldIndex}*/}
                                        {/*                    name={field.name}*/}
                                        {/*                    type={field.type}*/}
                                        {/*                    label={field.label}*/}
                                        {/*                    width={field.width}*/}
                                        {/*                />*/}
                                        {/*            )*/}
                                        {/*        }*/}
                                        {/*    )*/}
                                        {/*}*/}

                                    </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateBreadcrumbs: (pages) => dispatch(updateBreadcrumbs(pages)),
        resetBreadcrumbs: dispatch(resetBreadcrumbs())
    }
}

export default connect(null, mapDispatchToProps)(AddTask)