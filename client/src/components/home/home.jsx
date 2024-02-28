import Modal from '../modal/modal'
import './home.css'
import { useState } from 'react';
import Auth from '../auth/auth'

export default function Home() {

    const [modal, setModal] = useState(false);
    const [type, setType] = useState("");

    const handleModal = (e) => {
        const { name } = e.target;
        if(name === "sign-up") {
            setType("Sign Up")
        }
        else {
            setType("Sign In")
        }
        setModal(!modal);
    };

    const handleSubmit = () => {
        
    }

    return(
        <div className="home">
            <div>
            </div>
            <div className="home__button-div">
                <button className="home__button-div-one" onClick={handleModal} name="sign-up">Sign Up</button>
                <button className="home__button-div-two" onClick={handleModal} name="sign-in">Sign In</button>
            </div>
            <Modal toggleModal={handleModal} modal={modal}><Auth>{type}</Auth></Modal>
        </div>
    )
}