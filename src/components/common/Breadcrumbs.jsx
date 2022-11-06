import React from 'react'
import { Link } from 'react-router-dom'

export default function Breadcrumbs({title}) {
    return (
        <>
            <div className="ex-basic-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumbs">
                                <Link to='/'>Home</Link>
                                <i className="fa fa-angle-double-right"></i>
                                <span>{title}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
