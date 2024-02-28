import './modal.css';

export default function Modal({ toggleModal, modal, children, submitModal }) {  
    return (
      <>
        {modal && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
                <p>
                    { children }
                </p>
                <div className="modal-div">
                  <button className="close-modal" onClick={toggleModal}>
                        Close
                  </button>
                  <button className="submit-modal" onClick={submitModal}>
                        Submit
                  </button>
                </div>
            </div>
          </div>
        )}
      </>
    );
  }