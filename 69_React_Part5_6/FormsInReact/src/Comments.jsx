import { useState } from "react"
import "./Comments.css"
import CommentForm from "./CommentForm"
import CommentFormNew from "./CommentFormNew"

export default function Comments () {

    // let [comments, setComments] = useState([{
    //     username: "@harsh",
    //     remarks: "Good Work!",
    //     rating: 5,
    // }, {
    //     username: "@rohan",
    //     remarks: "Good Job!",
    //     rating: 4,
    // }])

    let [comments, setComments] = useState([{
            username: "harsh",
            remarks: "Good Work!",
            rating: 5,
        }, {
            username: "rohan",
            remarks: "Good Job!",
            rating: 4,
        }])

    function addNewComment( newComment ) {
        setComments( (currData)=> {
            return [...currData, newComment ]
        })
    }

    return (
        <>
            <h2>All Comments</h2>

            {comments.map( (comment, idx) => {
                return <div className="comment" key={idx}>
                    <span>{comment.remarks}</span> &nbsp;
                    <span>(rating = {comment.rating})</span> <br />
                    <span id="username">-@{comment.username}</span>
                </div>
            })}

            <hr />
            {/* <CommentForm addNewComment={addNewComment} /> */}
            <CommentFormNew addNewComment={addNewComment} />
        </>
    )
}