import React, {Fragment} from 'react'

import './Table.styles.scss'

const Table = ({rows,columns,tableName}) => {
    return (
        <Fragment>
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header">
                        <strong className="card-title">{tableName}</strong>
                        <div className='sort'>
                            <div className='sortby'>Sort By:</div>
                            <div className='sort-dropdown'>
                                <select className='form-control'>
                                    <option>Category</option>
                                    <option>Date</option>
                                    <option>Completed</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <table id="bootstrap-data-table" className="table table-striped table-bordered">
                            <thead>
                            <tr>
                                {
                                    columns.map((column,colIndex) => (
                                        <th key={colIndex}>{column.th}</th>
                                    ))
                                }
                            </tr>
                            </thead>
                            <tbody>
                            {
                                rows?
                                    rows.map((row, rowIndex) => {
                                        return (
                                            <tr key={rowIndex}>
                                                {
                                                    columns.map((column, colIndex) => (
                                                        <td key={colIndex}>{row[column.field]}</td>
                                                    ))
                                                }
                                            </tr>
                                        )
                                    })
                                    :
                                    <p>You have no data available</p>
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Table