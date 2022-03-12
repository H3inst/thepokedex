import { Fragment, useRef } from "react";

function Modal({ children, open = false, onClose = () => { } }) {

  const modalWrapperRef = useRef(null);

  const handleCloseModal = (event) => {
    if (modalWrapperRef.current === event.target) {
      onClose();
    }
  };

  const renderUI = () => {
    return (
      <Fragment>
        {open ? (
          <div ref={modalWrapperRef} className="poke-modal__wrapper" onClick={handleCloseModal}>
            <div className="poke-modal__card">
              {children}
            </div>
          </div>
        ) : null}
      </Fragment>
    );
  };

  return renderUI();
}

export default Modal;