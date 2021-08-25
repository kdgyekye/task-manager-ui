import React, {Fragment} from 'react'

const Table = (props) => {
    return (
        <Fragment>
            <div className="animated fadeIn">
                <div className="row">

                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <strong className="card-title">{props.tableName}</strong>
                            </div>
                            <div className="card-body">
                                <table id="bootstrap-data-table" className="table table-striped table-bordered">
                                    <thead>
                                    <tr>
                                        {
                                            props.tableHeads.map((th,thIndex) => (
                                                <th key={thIndex}>{th}</th>
                                            ))
                                        }
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        props.rows?
                                            props.rows.map((row, rowIndex) => {
                                                return (
                                                    <tr key={rowIndex}>
                                                        {
                                                            props.columns.map((column, colIndex) => (
                                                                <td key={colIndex}>{column}</td>
                                                            ))
                                                        }
                                                    </tr>
                                                )
                                            })
                                            :
                                            return (
                                                null
                                        )
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Table