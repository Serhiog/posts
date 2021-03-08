import React, { useRef, useState } from "react"
import { connect } from "react-redux"
import { fetchAddNewPost, fetchAddNewComment } from "../api-actions"
import { ActionCreator } from "../store/action"

function Form({ handleSendBtn, activeComments, handleSendBtnMessage }) {

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
        if (name === "" || email === "" || message === "") {
            alert('Enter text')
        } else {
            setName("")
            setEmail("")
            setMessage("")
            activeComments.length ? handleSendBtnMessage(name, email, message) : handleSendBtn(name, email, message)
        }

    }

    return (
        <form className="list__wrapper">
            <label className="list__form-title" htmlFor="name">Name</label>
            <input className="list__form-name" id="name" type="text" required onChange={onHaveChangeName} value={name} />
            <label className="list__form-title" htmlFor="email">Email</label>
            <input className="list__form-email" id="email" type="email" required onChange={onHaveChangeEmail} value={email} />
            <label className="list__form-title" htmlFor="message">Message</label>
            <textarea className="list__form-text" id="message" required onChange={onHaveChangeMessage} value={message} />
            <button type="button" className="list__addBtn" onClick={handleSendBtnView}  >Add new</button>
        </form>
    )
}

const mapStateToProps = (state) => ({
    activeComments: state.activeComments
})

const mapDispatchToProps = (dispatch) => ({
    handleSendBtn(name, email, message) {
        dispatch(fetchAddNewPost({ name, email, message }))
    },
    handleSendBtnMessage(name, email, message) {
        dispatch(ActionCreator.generateIdMessage())
        dispatch(fetchAddNewComment({ name, email, message }))
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(Form)