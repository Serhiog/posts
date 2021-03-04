import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { ActionCreator } from "../store/action";
import { BeatLoader } from "react-spinners";

function ListItem({ handleDeletePost, combinedData }) {

    return (
        <>
            <ul className="list__items">
                {!combinedData.length ? <li className="list__loader"><BeatLoader size={92} /></li> : null}
                {combinedData.map(post => {
                    return <li className="list__item" key={post.id}>
                        <NavLink to={"post/" + post.id} className="list__link">
                            <span className="list__title">{post.name}</span>
                            <p className="list__about">{post.title}</p>
                        </NavLink>
                        <button className="list__btn" onClick={() => { handleDeletePost(post.id) }}>X</button>
                    </li>
                })}
            </ul >
        </>
    )
}

const mapToStateProps = (state) => ({
    combinedData: state.combinedData
})

const mapDispatchToProps = (dispatch) => ({
    handleDeletePost(id) {
        dispatch(ActionCreator.deletePost(id))
    },
})


export default connect(mapToStateProps, mapDispatchToProps)(ListItem);