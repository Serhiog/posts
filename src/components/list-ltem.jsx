import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { ActionCreator } from "../store/action";
import { fetchComments } from "../api-actions";
import { BeatLoader } from "react-spinners"

function ListItem({ posts, savePost, handleDeletePost }) {
    return (
        <>
            <ul className="list__items">
                {!posts.length ? <li className="list__loader"><BeatLoader size={92} /></li> : null}
                {posts.map(post => {
                    return <li className="list__item" key={post.id}>
                        <NavLink to={"post/" + post.id} className="list__link" onClick={() => { savePost(post) }}>
                            <span className="list__title">{post.email}</span>
                            <p className="list__about">{post.name}</p>
                        </NavLink>
                        <button className="list__btn" onClick={() => { handleDeletePost(post.id) }}>X</button>
                    </li>
                })}
            </ul >
        </>
    )
}

const mapToStateProps = (state) => ({
    posts: state.posts,
})

const mapDispatchToProps = (dispatch) => ({
    savePost(post) {
        dispatch(ActionCreator.savePost(post))
        dispatch(fetchComments(post.id))
    },
    handleDeletePost(id) {
        dispatch(ActionCreator.deletePost(id))
    }
})


export default connect(mapToStateProps, mapDispatchToProps)(ListItem);