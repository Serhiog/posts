
import { connect } from "react-redux";
import ListItem from "./list-ltem";
import Form from "./form"
import { ActionCreator } from "../store/action";

function List({ gotPosts, combineData }) {

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
    gotPosts: state.gotPosts,
})

const mapDispatchToProps = (dispatch) => ({

    combineData() {
        dispatch(ActionCreator.combineData())
    },
})

export default connect(mapToStateProps, mapDispatchToProps)(List);