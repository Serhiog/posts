
import { connect } from "react-redux";
import ListItem from "./list-ltem";
import Form from "./form"

function List({ gotPosts }) {

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

export default connect(mapToStateProps)(List);