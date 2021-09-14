import React, {Fragment, useEffect} from "react";

import {connect} from "react-redux";
import {resetBreadcrumbs, updateBreadcrumbs} from "../../store/actions/breadcrumbs.actions";

import {TextField,TextArea, SelectField, CheckBoxField} from "../../components/Form-Input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import {withFormik} from "formik";
import * as  Yup from 'yup'

import './AddTasks.styles.scss'

const AddTask  = (props) => {


    useEffect(() => {
        document.title = 'Unicorn Tasks - Add Task'
        resetBreadcrumbs()
        props.updateBreadcrumbs('Add Tasks')
    }, [])

    return (
        <Fragment>
            <div className="col-lg-8" style={{margin: 'auto'}}>
                <div className="card">
                    {/*<div className="card-header" />*/}
                    <div className="card-body addTasksBody">
                        <div id="pay-invoice">
                            <div className="card-body">
                                <div className="card-title">
                                    <h3 className="text-center">Add New Task</h3>
                                </div>
                                <hr />
                                    <form>
                                        <div className='row'>
                                            <TextField
                                                name={'description'}
                                                type={'text'}
                                                label={'Description'}
                                                width={'col-lg-6'}
                                                placeholder={'E.g Go To The Gym'}
                                                value={props.values['description']}
                                                onChange={props.handleChange}
                                                onBlur={props.handleBlur}
                                                touched={props.touched['description']}
                                                errors={props.errors['description']}
                                                icon={'fa-pencil'}
                                                />
                                        </div>
                                        <div className='row'>
                                            <div className='col-lg-6'>
                                                <SelectField
                                                    name={'category'}
                                                    label={'Category'}
                                                    options={['Sports', 'Health', 'Coding', 'Fitness']}
                                                    value={props.values['category']}
                                                    onChange={props.handleChange}
                                                    onBlur={props.handleBlur}
                                                    touched={props.touched['category']}
                                                    errors={props.errors['category']}
                                                />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-lg-6'>
                                                <TextField
                                                    name={'date'}
                                                    type={'date'}
                                                    label={'Date'}
                                                    placeholder={'Select date to perform task'}
                                                    value={props.values['date']}
                                                    onChange={props.handleChange}
                                                    onBlur={props.handleBlur}
                                                    touched={props.touched['date']}
                                                    errors={props.errors['date']}
                                                    icon={'fa-calendar'}
                                                />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-lg-6'>
                                                <CheckBoxField
                                                    name={'status'}
                                                    type={'check'}
                                                    label={'Completion Status'}
                                                    options={['Completed', 'Pending']}
                                                    value={props.values['status']}
                                                    onChange={props.handleChange}
                                                    onBlur={props.handleBlur}
                                                    touched={props.touched['status']}
                                                    errors={props.errors['status']}
                                                />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <TextArea
                                                name={'details'}
                                                type={'text'}
                                                label={'Details'}
                                                width={'col-lg-12'}
                                                placeholder={'More details about the task'}
                                                value={props.values['details']}
                                                onChange={props.handleChange}
                                                onBlur={props.handleBlur}
                                                touched={props.touched['details']}
                                                errors={props.errors['details']}
                                            />
                                        </div>
                                        <CustomButton
                                            icon={'fa-tasks fa-lg'}
                                            action={'Add Task'}
                                            color={'rebeccapurple'}
                                        />
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
        status: 'pending',
        date: '',
        details: ''
    }),
    validationSchema: Yup.object().shape({
        description: Yup.string().required('You need to fill this field'),
        category: Yup.string().required('You need to fill this field'),
        details: Yup.string().required('You need to fill this field'),
        date: Yup.date().required('You need to fill this field')
    })

})(AddTask))