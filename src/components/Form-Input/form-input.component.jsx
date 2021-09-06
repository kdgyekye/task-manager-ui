import React, {Fragment} from "react";

export const TextField =  ({label, type, name, width, ...otherProps}) => {
    return (
        <Fragment>
            <div className="form-group has-success">
                <label className="col-form-label mb-1">{label}</label>
                <input id="cc-name" name={name} type={`${type}`} className={`form-control ${width} valid`} />
                    <span className="help-block field-validation-valid">
                        {
                            (otherProps.touched && otherProps.errors) &&
                            otherProps.errors
                        }
                    </span>
            </div>
        </Fragment>
    )
}

export const SelectField = ({options, label, type, name, width, ...otherProps}) => {
    return (
        <Fragment>
            <div className="form-group ">
                <label className="col-form-label mb-1" for='selectCategory'>{label}</label>
                <select className={`form-control ${width}`} id='selectCategory'>
                    <option value=''>Please select a category</option>
                    {
                        options.map((option, optionIndex) => {
                            return (
                                <option key={optionIndex} value={option.toLowerCase()}>{option}</option>
                                )
                        })
                    }
                </select>
                <span className="help-block field-validation-valid">
                        {
                            (otherProps.touched && otherProps.errors) &&
                            otherProps.errors
                        }
                    </span>
            </div>
        </Fragment>
    )
}

export const CheckBoxField = ({options, label, type, name, width, ...otherProps}) => {
    return (
        <Fragment>
            <div className="form-group">
                <label className="col-form-label mb-1">{label}</label>
                {
                    options.map((option, optionIndex) => (
                        <div className='form-check'>
                            <input className="form-check-input" type="radio" name={`${name}`} id={`$name`}
                                   value={option.toLowerCase()} checked key={optionIndex}/>
                            <label className="form-check-label">
                                {option}
                            </label>
                        </div>
                    ))
                }
                <span className="help-block field-validation-valid">
                        {
                            (otherProps.touched && otherProps.errors) &&
                            otherProps.errors
                        }
                    </span>
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
                <span className="help-block field-validation-valid">
                        {
                            (otherProps.touched && otherProps.errors) &&
                            otherProps.errors
                        }
                    </span>
            </div>
        </Fragment>
    )

}
