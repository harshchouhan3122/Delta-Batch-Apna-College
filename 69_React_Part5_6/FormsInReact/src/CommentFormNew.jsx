import { useState } from "react";
import { useFormik } from "formik"

const errorStyle = {
    color: 'red',
  };

const validate = values => {
    const errors = {};

    if (!values.username) {
      errors.username = 'Username Required';
    } 

    if (!values.remarks) {
        errors.remarks = "Remarks can't be empty." ;
    }

    if (!values.rating) {
        errors.rating = "Required" ;
    }

    return errors;
};

export default function CommentFormNew( {addNewComment} ) {
    
    // Initialise Form Data
    // let init = () => {
    //     return {
    //         username: "",
    //         remarks: "",
    //         rating: 5,
    //     }
    // }

    // let [formData, setFormData] = useState(init)

    const formik = useFormik({
        initialValues: {
          username: '',
          remarks: '',
          rating: 5,
        },
        validate,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
    });


    // function handleInputChange(event){
    //     setFormData( (currData) => {
    //         return {...currData, [event.target.name]: event.target.value}
    //     })
    // }

    // function handleSubmit (event) {
    //     addNewComment(formData);
    //     event.preventDefault();
    //     // console.log(formData);
    //     setFormData(init);
    // }

    return (
        <>
            <h2>Comment Here!</h2>

            {/* <form action="" onSubmit={handleSubmit}> */}
            <form onSubmit={formik.handleSubmit}>

                <label htmlFor="username">Username:</label> &ensp;
                <input type="text" name="username" id="username" placeholder="username" onChange={formik.handleChange} value={formik.values.username} />
                {formik.errors.username ? <div style={errorStyle}>{formik.errors.username}</div> : null}
                <br /><br />

                <label htmlFor="remarks">Remarks:</label> &ensp;
                <textarea name="remarks" id="remarks" onChange={formik.handleChange} value={formik.values.remarks} ></textarea>
                {formik.errors.remarks ? <div style={errorStyle}>{formik.errors.remarks}</div> : null}
                <br /><br />

                <label htmlFor="rating">Rating:</label> &ensp;
                <input type="number" name="rating" id="rating" onChange={formik.handleChange} value={formik.values.rating} min={1} max={5} />
                {formik.errors.ranking ? <div style={errorStyle}>{formik.errors.ranking}</div> : null}
                <br /><br />

                <button type="Submit">Comment</button>
            </form>
        </>
    )
}