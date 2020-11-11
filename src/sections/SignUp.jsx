import React, { useState } from "react"
import { Form, Button, Checkbox } from "semantic-ui-react"
import {db} from "../firebase"

export default function SignUp() {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [loader, setLoader] = useState(false);

    const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
    let validForm = false;

    const checkValid = () => {
        let validFirstName = firstname.length < 2 && firstname.length > 0 ? false : true;
        let validLastname = lastname.length < 2 && lastname.length > 0 ? false : true;
        let validEmail = emailRegex.test(email) && email.length > 0 ? true : false;

        if (validFirstName === false || validLastname === false) {
            validForm = false;
        } else if (validEmail === false) {
            validForm = false;
        } else {
            validForm = true;
        }

        console.log(validForm)
        return validForm;
        


    }

    const handleSumbit = (e) => {
        checkValid()
        if (validForm === false) {
            alert("inputs not valid");
        } else {
            e.preventDefault();

            setLoader(true);
    
    
            db.collection("contacts").add({
                name : firstname,
                lastname: lastname,
                email : email
            }).then(() => {
                alert("you have been added to the mailing list");
                setLoader(false);
            }).catch((err) => {
                alert(err.message);
                setLoader(false);
    
            });
    
            setFirstname("");
            setLastName("");
            setEmail("");
        }

        
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
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    required
                    />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input 
                    placeholder='Last Name' 
                    value={lastname}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    />
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <input 
                    placeholder='Email' 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to help the world' />
                </Form.Field>
                <Button style={{background : loader ? "#d2d3c9" : "#16a596"}} type='submit'>Submit</Button>
            </Form>
        </div>


    )
}