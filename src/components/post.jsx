import React from "react"
import { connect } from "react-redux"
import { ActionCreator } from "../store/action"
import Form from "./form"
import { BeatLoader } from "react-spinners"

function Post({ activePost, activeComments, handleDeleteComment }) {

    return <div className="post">
        <div className="post__inner">
            <div className="post__main">
                <h2 className="post__title">POST:</h2>
                <p className="post__author"><pre>{`Name: 
                `}</pre>{activePost.name}</p>
                <span className="post__email"><pre>{`Email: 
                `}</pre> {activePost.email}</span>
                <p className="post__text"><pre>{`Message: 
                `}</pre> {activePost.body}</p>
            </div>
            <div className="post__comments">
                <h2 className="post__title">COMMENTS:</h2>
                <ul className="post__list">
                    {!activeComments.length ? <li className="post__loader"><BeatLoader size={92} /></li> : null}
                    {activeComments.map(comment => {
                        return <li className="post__item" key={comment.id}>
                            <p className="post__item-author">{comment.name}</p>
                            <span className="post__item-email">{comment.email}</span>
                            <p className="post__item-text">{comment.body}</p>
                            <button className="post__btn" onClick={() => { handleDeleteComment(comment.id) }}>X</button>
                        </li>
                    })}
                </ul>
            </div>
            <Form />
        </div>
    </div >
}

const mapStateToProps = (state) => ({
    activePost: state.activePost,
    activeComments: state.activeComments
})

const mapDispatchToProps = (dispatch) => ({
    handleDeleteComment(id) {
        dispatch(ActionCreator.deleteComment(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Post)