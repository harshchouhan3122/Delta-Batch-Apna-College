import { useState } from "react";

export default function CommentForm( {addNewComment} ) {
    
    // Initialise Form Data
    let init = () => {
        return {
            username: "",
            remarks: "",
            rating: 5,
        }
    }

    let [formData, setFormData] = useState(init)

    function handleInputChange(event){
        setFormData( (currData) => {
            return {...currData, [event.target.name]: event.target.value}
        })
    }

    function handleSubmit (event) {
        addNewComment(formData);
        event.preventDefault();
        console.log(formData);
        setFormData(init);
    }

    return (
        <>
            <h2>Comment Here!</h2>

            <form action="" onSubmit={handleSubmit}>

                <label htmlFor="username">Username:</label> &ensp;
                <input type="text" name="username" id="username" placeholder="username" onChange={handleInputChange} value={formData.username} />
                <br /><br />

                <label htmlFor="remarks">Remarks:</label> &ensp;
                <textarea name="remarks" id="remarks" onChange={handleInputChange} value={formData.remarks} ></textarea>
                <br /><br />

                <label htmlFor="rating">Rating:</label> &ensp;
                <input type="number" name="rating" id="rating" onChange={handleInputChange} value={formData.rating} min={1} max={5} />
                <br /><br />

                <button>Comment</button>
            </form>
        </>
    )
}