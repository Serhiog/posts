import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { ActionCreator } from "../store/action"

function Form({ handleName, formName, formEmail, formMessage, handleEmail, handleMessage, handleSendBtn, activeComments, handleSendBtnMessage }) {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const onHaveChangeName = (evt) => {
        setName(evt.target.value)
    }
    const onHaveChangeEmail = (evt) => {
        setEmail(evt.target.value)
    }
    const onHaveChangeMessage = (evt) => {
        setMessage(evt.target.value)
    }

    function handleSendBtnView(evt) {
        evt.preventDefault()
        setName("")
        setEmail("")
        setMessage("")
        activeComments.length ? handleSendBtnMessage(name, email, message) : handleSendBtn(name, email, message)
    }

    return (
        <form className="list__wrapper">
            <label className="list__form-title" htmlFor="name">Name</label>
            <input className="list__form-name" id="name" type="text" required onChange={onHaveChangeName} value={name} />
            <label className="list__form-title" htmlFor="email">Email</label>
            <input className="list__form-email" id="email" type="email" required onChange={onHaveChangeEmail} value={email} />
            <label className="list__form-title" htmlFor="message">Message</label>
            <textarea className="list__form-text" id="message" required onChange={onHaveChangeMessage} value={message} />
            <button type="button" className="list__addBtn" onClick={handleSendBtnView} >Add new</button>
        </form>
    )
}

const mapStateToProps = (state) => ({
    formData: state.formData,
    activeComments: state.activeComments
})

const mapDispatchToProps = (dispatch) => ({
    handleName(evt) {
        dispatch(ActionCreator.handleName(evt.target.value))
    },
    handleEmail(evt) {
        dispatch(ActionCreator.handleEmail(evt.target.value))
    },
    handleMessage(evt) {
        dispatch(ActionCreator.handleMessage(evt.target.value))
    },
    handleSendBtn(name, email, message) {
        dispatch(ActionCreator.generateId())
        dispatch(ActionCreator.handleSendBtn({ name, email, message }))
    },
    handleSendBtnMessage(name, email, message) {
        dispatch(ActionCreator.generateIdMessage())
        dispatch(ActionCreator.handleSendBtnMessage({ name, email, message }))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Form)