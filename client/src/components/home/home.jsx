import Modal from '../modal/modal'
import './home.css'
import { useState } from 'react';
import Auth from '../auth/auth'

export default function Home() {

    const [modal, setModal] = useState(false);

    const handleModal = () => {
        setModal(!modal);
    };

    return(
        <div className="home">
            <div>
            </div>
            <div className="home__button-div">
                <button className="home__button-div-one" onClick={handleModal}>Sign Up</button>
                <button className="home__button-div-two" onClick={handleModal}>Log In</button>
            </div>
            <Modal toggleModal={handleModal} modal={modal}><Auth /></Modal>
        </div>
    )
}