import React, {useState, Fragment} from "react";

export const TextField =  ({label, type, name, width, ...otherProps}) => {
    return (
        <Fragment>
            <div className="form-group has-success">
                <label className="control-label mb-1">{label}</label>
                <input id="cc-name" name={name} type={`${type}`} className={`form-control ${width} valid`} />
                    <span className="help-block field-validation-valid" data-valmsg-for="cc-name"
                    data-valmsg-replace="true"/>
            </div>
        </Fragment>
    )
}

export const SelectField = ({options, label, type, name, width, ...otherProps}) => {
    return (
        <Fragment>
            <div className="form-group ">
                <label className="control-label mb-1">{label}</label>
                <select className={`form-control ${width} valid`}>
                    {
                        options.ma((option, optionIndex) => {
                            <option key={optionIndex}>{option}</option>
                        })
                    }
                </select>
            </div>
        </Fragment>
    )
}

export const CheckBox = ({options, label, type, name, width, ...otherProps}) => {
    return (
        <Fragment>
            <div className="form-group">
                <label className="control-label mb-1">{label}</label>
                {
                    options.map((option, optionIndex) => (
                        <div className='form-check'>
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"
                                   value="option1" checked />
                            <label className="form-check-label" htmlFor="exampleRadios1">
                                {options}
                            </label>
                        </div>
                    ))
                }
            </div>
        </Fragment>
    )
}

export const TextArea =  ({label, type, name, width, ...otherProps}) => {
    return (
        <Fragment>
            <div className="form-group has-success">
                <label htmlFor="cc-name" className="control-label mb-1">{label}</label>
                <textarea id="cc-name" name={name} className={`form-control ${width} valid`} rows='5'/>
                <span className="help-block field-validation-valid" data-valmsg-for="cc-name"
                      data-valmsg-replace="true"/>
            </div>
        </Fragment>
    )
}
