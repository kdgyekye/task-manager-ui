import React, {useState, Fragment} from "react";

export const TextField =  ({label, type, name, width, ...otherProps}) => {
    return (
        <Fragment>
            <div className="form-group has-success">
                <label htmlFor="cc-name" className="control-label mb-1">{label}</label>
                <input id="cc-name" name={name} type={`${type}`} className={`form-control ${width} valid`} />
                    <span className="help-block field-validation-valid" data-valmsg-for="cc-name"
                    data-valmsg-replace="true"/>
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
