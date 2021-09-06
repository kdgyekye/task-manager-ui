import React, {Fragment, useEffect} from "react";

import {connect} from "react-redux";
import {resetBreadcrumbs, updateBreadcrumbs} from "../../store/actions/breadcrumbs.actions";

import {TextField,TextArea, SelectField, CheckBoxField} from "../../components/Form-Input/form-input.component";
import {withFormik} from "formik";
import * as  Yup from 'yup'

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
                                        <div className='row'>
                                            <TextField
                                                name={'description'}
                                                type={'text'}
                                                label={'Description'}
                                                width={'col-lg-6'}
                                                />
                                        </div>
                                        <div className='row'>
                                            <div className='col-lg-6'>
                                                <SelectField
                                                    name={'description'}
                                                    type={'text'}
                                                    label={'Category'}
                                                    options={['Sports', 'Health', 'Coding', 'Fitness']}
                                                />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-lg-6'>
                                                <CheckBoxField
                                                    name={'completed'}
                                                    type={'check'}
                                                    label={'Completion Status'}
                                                    options={['Completed', 'Pending']}
                                                />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <TextArea
                                                name={'details'}
                                                type={'text'}
                                                label={'Details'}
                                                width={'col-lg-10'}
                                            />
                                        </div>
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

export default connect(null, mapDispatchToProps)(withFormik({
    mapPropsToValues: () => ({
        description: '',
        category: '',
        completion: '',
        details: ''
    }),
    validationSchema: Yup.object().shape({
        description: Yup.string().required('You need to fill this field'),
        category: Yup.string().required('You need to fill this field')
    })

})(AddTask))