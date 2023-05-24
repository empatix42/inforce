import { Link } from "react-router-dom";
import { useState } from "react";

import Trashcan from "../../assets/delete.svg";

import Modal from "../modal/Modal";

import "./ProductList.css";

const ProductList = ({ products }) => {
  const [showModal, setShowModal] = useState(false);
  const [productId, setProductId] = useState("");

  const handleDelete = (id) => {
    setProductId(id);
    setShowModal(true);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  const confirmDelete = () => {
    setShowModal(false);

    fetch("http://localhost:3000/products/" + productId, {
      method: "DELETE",
    });
  };

  if (products.length === 0) {
    return <div className="error">No products to load...</div>;
  }

  return (
    <div className="product-list">
      {products.map((product) => {
        return (
          <div key={product.id} className="card">
            <h3>{product.name}</h3>
            <img
              className="icon-delete"
              src={Trashcan}
              onClick={() => handleDelete(product.id)}
              alt="delete icon"
            />
            <Link to={`/products/${product.id}`}>Show details</Link>
          </div>
        );
      })}

      {showModal && (
        <Modal>
          <>
            <h3>Are you sure you want to delete this product?</h3>

            <div className="btns">
              <button
                type="button"
                className="btn-cancel"
                onClick={() => handleCancel()}
              >
                Cancel
              </button>
              <button type="button" onClick={() => confirmDelete()}>
                Confirm
              </button>
            </div>
          </>
        </Modal>
      )}
    </div>
  );
};

export default ProductList;
