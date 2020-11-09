import React from "react"
import { Form, Button, Checkbox } from "semantic-ui-react"

export default class Footer extends React.Component {
    render() {
        return (
            <div className="sign-up-div">
                <Form>
                    <Form.Field>
                        <label>First Name</label>
                        <input placeholder='First Name' />
                    </Form.Field>
                    <Form.Field>
                        <label>Last Name</label>
                        <input placeholder='Last Name' />
                    </Form.Field>
                    <Form.Field>
                        <label>Email</label>
                        <input placeholder='Email' />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox label='I agree to help the world' />
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form>
            </div>


        )
    }
}