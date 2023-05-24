import "./Modal.css";

const Modal = ({ children }) => {
  return (
    <div className="container">
      <div className="modal">
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
