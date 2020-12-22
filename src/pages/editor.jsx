import React from 'react'
import Header from '../components/containers/Header'

const editor = () => {
    return (
        <>
        <Header />
        <div className="editor">
            <section className="template-board">
                <div className="template-editor"></div>
                <div className="editing-toolbar"></div>
            </section>
        </div>
        </>
    )
}

export default editor
