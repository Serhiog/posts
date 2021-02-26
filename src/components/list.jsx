
import { connect } from "react-redux";
import { fetchPosts } from "../api-actions";
import ListItem from "./list-ltem";
import Form from "./form"

function List({ fetchPosts, gotPosts }) {
    fetchPosts()
    return (
        <>
            <section className="list">
                <div div className="list__inner" >
                    {gotPosts ? <ListItem /> : <p> No Posts</p>}
                    <Form />
                </div>
            </section >
        </>
    )
}

const mapToStateProps = (state) => ({
    gotPosts: state.gotPosts
})

const mapDispatchToProps = (dispatch) => ({
    fetchPosts() {
        dispatch(fetchPosts())
    },
})

export default connect(mapToStateProps, mapDispatchToProps)(List);