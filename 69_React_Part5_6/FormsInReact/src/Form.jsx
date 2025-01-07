import { useState } from "react";

export default function Form () {
    // let [fullName, setFullName] = useState("")
    // let [isDisplay, setIsDisplay] = useState(false)

    let [formData, setFormData] = useState({
        fullName: "",
        username: "",
        password: ""
    })


    let handleNameChange = (event) => {
        setFullName(event.target.value);
        setIsDisplay(false);
    }

    let handleClick = (event) => {
        event.preventDefault();
        setIsDisplay(true);
        // setFullName("");
    }

    function handleInputChange(event) {
        // let fieldName = event.target.name;
        // let newValue = event.target.value;
        // console.log(`${fieldName}, ${newValue}`)

        setFormData( (currData) => {
            // return { ...currData, name: 'Harsh Chouhan' };
            // return {...currData, [fieldName] : newValue }
            return {...currData, [event.target.name] : event.target.value }
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(formData);

        setFormData({
            fullName: "",
            username: "",
            password: ""
        });
    }


    return (
        <form action="" onSubmit={handleSubmit}>
            <h2>Registration Form in React</h2>

            {/* <input type="text" placeholder="enter full name" onChange={handleNameChange} />
            <button onClick={handleClick}>Sumit</button>
            <label htmlFor="address">Address: </label>
            <input type="text" id="address" placeholder="enter address" /> */}
            <hr />

            <label htmlFor="fullName"> Full Name: </label> &ensp;
            <input type="text" id="fullName" name="fullName" placeholder="Enter Full Name" value={formData.fullName} onChange={handleInputChange} />
            <br /> <br />

            <label htmlFor="username"> Username: </label> &ensp;
            <input type="text" id="username" name="username" placeholder="@example123" value={formData.username} onChange={handleInputChange} />
            <br /> <br />

            <label htmlFor="password"> Full Name: </label> &ensp;
            <input type="password" id="password" name="password" placeholder="password" value={formData.password} onChange={handleInputChange} />
            <br /> <br />

            <button>Submit</button>

        </form>
    )
}

