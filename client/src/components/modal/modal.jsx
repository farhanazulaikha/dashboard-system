import './modal.css';

export default function Modal({ toggleModal, modal, children}) {  
    return (
      <>
        {modal && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
                <div>
                    { children }
                </div>
                <div className="modal-div">
                  <button className="close-modal" onClick={toggleModal}>
                        Close
                  </button>
                  <button className="submit-modal" type="submit">
                        Submit
                  </button>
                </div>
            </div>
          </div>
        )}
      </>
    );
  }