import React, { useState } from 'react';

export default function Contact() {
    // eslint-disable-next-line
    const [name, setname] = useState('');
    const [firstnameError, setfirstnameError] = useState(true);
    const [lastnameError, setlastnameError] = useState(true);
    const [emailError, setemailError] = useState(true);
    const [messageError, setmessageError] = useState(true);
    const [showSubmit, setshowSubmit] = useState(false);

    const handleChange = (input) => {
        let name = input.target.name;
        let value = input.target.value;
        // eslint-disable-next-line
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        switch (name) {
            case 'firstname':
                value !== '' ? setfirstnameError(false) : setfirstnameError(true)
                break;
            case 'lastname':
                value !== '' ? setlastnameError(false) : setlastnameError(true)
                break;
            case 'email':
                emailPattern.test(value) ? setemailError(false) : setemailError(true)
                break;
            case 'message':
                value !== '' ? setmessageError(false) : setmessageError(true)
                break;
            default:
                break;
        }
        setname(value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const clickSubmit = () => {
        setshowSubmit(true)
    }

    return (
        <div className="row">
            <div className="col-sm-9">
                <h1>Contact Form</h1>
                <form onSubmit={handleSubmit}>
                    <p>Enter your firstname</p>
                    <input type="text"
                        name="firstname"
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Ola"
                    />
                    <p className={(firstnameError) ? 'error' : 'error__hide'}>Please enter your First Name</p>
                    <br />
                    <p>Enter your lastname</p>
                    <input type="text"
                        name="lastname"
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Nordmann"
                    />
                    <p className={(lastnameError) ? 'error' : 'error__hide'}>Please enter your Last Name</p>
                    <br />
                    <p>Enter your email</p>
                    <input type="text"
                        name="email"
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Ola.Nordmann@gmail.com"
                    />
                    <p className={(emailError) ? 'error' : 'error__hide'}>Please enter a valid email</p>
                    <br />
                    <p>Enter your message</p>
                    <input type="text"
                        name="message"
                        onChange={handleChange}
                        className="form-control"
                    />
                    <p className={(messageError) ? 'error' : 'error__hide'}>Please enter a message</p>
                    <br />
                    <input type="submit" onClick={clickSubmit} disabled={firstnameError || lastnameError || emailError || messageError} className="btn-dark" />
                    <br />
                    <br />
                    <p className={showSubmit !== true ? 'd-none' : 'd-block'}>Submitted</p>
                </form>
                <br />
            </div>
        </div>
    )
}
