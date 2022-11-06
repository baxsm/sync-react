import React from 'react'

export default function Heading({ title }) {
    return (
        <>
            <header id="header" className="ex-header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>{title}</h1>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
