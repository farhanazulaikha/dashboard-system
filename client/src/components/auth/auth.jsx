import './auth.css'
import { useState } from 'react'

export default function Auth({children, toggleModal}) {

    const [person, setPerson] = useState({
        fullName: "",
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPerson(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(person)
    }

    return(
        <div className="auth">
            <div className="auth__title">{children}</div>
            <form onSubmit={handleSubmit}>
                {children === "Sign Up" ?
                    <div className="auth__field">
                    <label className="auth__field-label">Name</label>
                    <input type="text" className="auth__field-input" placeholder="Enter your name" name="fullName" 
                        value={person['fullName']} onChange={handleChange}></input>
                    </div>
                    :
                    ""
                }

                <div className="auth__field">
                    <label className="auth__field-label">Email</label>
                    <input type="email" className="auth__field-input" placeholder="Enter your email" name="email" 
                    value={person['email']} onChange={handleChange} required></input>
                </div>
                <div className="auth__field">
                    <label className="auth__field-label">Password</label>
                    <input type="password" className="auth__field-input" placeholder="Enter your password" name="password" 
                    value={person['password']} onChange={handleChange} required></input>
                </div>
                <div className="auth__button-div">
                  <button className="auth__button-div-close" onClick={toggleModal} type="button">
                        Close
                  </button>
                  <button className="auth__button-div-submit" type="submit">
                        Submit
                  </button>
                </div>
            </form>
        </div>
    )
}