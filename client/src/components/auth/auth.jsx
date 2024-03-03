import './auth.css'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'; 
const BASE_URL = "http://localhost:5000/user";

export default function Auth({children, toggleModal}) {

    axios.defaults.withCredentials = true;
    const navigate = useNavigate();

    const [person, setPerson] = useState({
        fullName: "",
        email: "",
        password: ""
    })

    const [showError, setShowError] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPerson(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let url;
        {children === "Sign Up" 
            ? url = 'sign-up' : url = 'sign-in'
        }
        axios.post(`${BASE_URL}/${url}`, {
            fullName: person.fullName,
            email: person.email,
            password: person.password
        }).then(res => {
            if(res.data.message === "Success") {
                setShowError(false);
                localStorage.setItem('token', JSON.stringify(res.data.token));
                localStorage.setItem('fullName', JSON.stringify(res.data.fullName));
                navigate(`/dashboard/${res.data.id}`)
            }
            else {
                setShowError(true);
            }
        }).catch(err => console.log(err))
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
                { showError ? 
                    <div className="auth__error-message">
                        Email has already been used!
                    </div>
                    : ''
                }
                <div className="auth__button-div">
                  <button className="auth__button-div-close" onClick={toggleModal} type="button">
                        Close
                  </button>
                  <button className="auth__button-div-submit" type="submit">
                    {children}
                  </button>
                </div>
            </form>
        </div>
    )
}