import React, {Fragment, useEffect} from "react";

const Categories  = () => {

    useEffect(() => {
        document.title = 'Categories - Unicorn Task Manager'
    })
    return (
        <Fragment>
            <p>Categories</p>
        </Fragment>
    )
}

export default Categories