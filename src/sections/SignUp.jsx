import React, { useState, useEffect } from "react"
import { Form, Button, Checkbox } from "semantic-ui-react"
import {db} from "../firebase"

export default function SignUp() {

    const [name, setName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const [loader, setLoader] = useState(false);

    const handleSumbit = (e) => {
        e.preventDefault();
        setLoader(true);

        db.collection("contacts").add({
            name : name,
            lastname: lastname,
            email : email
        }).then(() => {
            alert("you have been added to the mailing list");
            setLoader(false);
        }).catch((err) => {
            alert(err.message);
            setLoader(false);

        });

        setName("");
        setLastName("");
        setEmail("");
    }
    

    return (
        <div className="sign-up-div">
            <h2 className="sectionHeader">SIGN-UP FOR BI-WEEKLY EMAILS</h2>
            <Form 
            className="signUpForm"
            onSubmit={handleSumbit}
            >
                <Form.Field>
                    <label>First Name</label>
                    <input 
                    placeholder='First Name' 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input 
                    placeholder='Last Name' 
                    value={lastname}
                    onChange={(e) => setLastName(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <input 
                    placeholder='Email' 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to help the world' />
                </Form.Field>
                <Button style={{background : loader ? "#ccc" : "rgb(2 ,2, 110)"}} type='submit'>Submit</Button>
            </Form>
        </div>


    )
}