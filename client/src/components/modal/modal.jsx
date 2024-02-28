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
            </div>
          </div>
        )}
      </>
    );
  }