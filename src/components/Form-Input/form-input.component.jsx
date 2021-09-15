import React, {Fragment} from "react";

export const TextField =  ({label, type, name, width, placeholder, icon, ...otherProps}) => {
    return (
        <Fragment>
            <div className="form-group has-success">
                <label className="col-form-label font-semibold mb-1">{label}</label>
                <div className='input-group'>
                    <div className="input-group-addon" style={{backgroundColor: 'rebeccapurple', color: 'white'}}><i className={`fa ${icon}`} /></div>
                    <input id="cc-name" name={name}
                           type={`${type}`}
                           className={`form-control ${width} valid`}
                           placeholder={placeholder}
                           onChange={otherProps.onChange}
                           onBlur={otherProps.onBlur}
                           style={{minWidth:'80%'}}
                    />
                    <div className="text-danger" style={{marginLeft: '10px'}}>
                        {
                            (otherProps.touched && otherProps.errors) &&
                            otherProps.errors
                        }
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export const SelectField = ({options, label, type, name, width, ...otherProps}) => {
    return (
        <Fragment>
            <div className="form-group ">
                <label className="col-form-label font-semibold mb-1" htmlFor='selectCategory'>{label}</label>
                <div className='input-group'>
                    <select className={`form-control ${width}`}
                            id='selectCategory'
                            onChange={otherProps.onChange}
                            onBlur={otherProps.onBlur}
                     >
                        <option value=''>Please select a category</option>
                        {
                            options.map((option, optionIndex) => {
                                return (
                                    <option key={optionIndex} value={option.toLowerCase()}>{option}</option>
                                )
                            })
                        }
                    </select>
                    <div className="input-group-addon" style={{backgroundColor: 'rebeccapurple', color: 'white'}}><i className="fa fa-database" /></div>
                </div>
                <span className="text-danger" style={{marginLeft: '10px'}}>
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
                <label className="col-form-label font-semibold mb-1">{label}</label>
                {
                    options.map((option, optionIndex) => (
                        <div className='form-check'>
                            <input className="form-check-input"
                                   type="radio" name={`${name}`}
                                   id={`$name`}
                                   value={option.toLowerCase()}
                                   checked
                                   key={optionIndex}
                                   onChange={otherProps.onChange}
                            />
                            <label className="form-check-label">
                                {option}
                            </label>
                        </div>
                    ))
                }
                <span className="text-danger" style={{marginLeft: '10px'}}>
                        {
                            (otherProps.touched && otherProps.errors) &&
                            otherProps.errors
                        }
                    </span>
            </div>
        </Fragment>
    )
}

export const TextArea =  ({label, type, name, width, placeholder, ...otherProps}) => {
    return (
        <Fragment>
            <div className="form-group has-success">
                <label htmlFor="cc-name" className="col-form-label font-semibold mb-1">{label}</label><span style={{color: 'rebeccapurple'}}><i className='fa fa-comments'/></span>
                <textarea id="cc-name"
                          name={name}
                          className={`form-control ${width} valid`}
                          rows='5'
                          placeholder={placeholder}
                          onChange={otherProps.onChange}
                          onBlur={otherProps.onBlur}
                />
                <span className="text-danger" style={{marginLeft: '10px'}}>
                        {
                            (otherProps.touched && otherProps.errors) &&
                            otherProps.errors
                        }
                    </span>
            </div>
        </Fragment>
    )

}
