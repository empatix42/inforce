import { useState, useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

import { v4 as uuidv4 } from "uuid";

import "./Create.css";

const Create = () => {
  const [name, setName] = useState("");
  const [count, setCount] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [productId, setProductId] = useState(uuidv4());
  const [commentDescription, setCommentDescription] = useState("");
  const [comments, setComments] = useState([]);

  const { postData, data } = useFetch("http://localhost:3000/products", "POST");

  const navigate = useNavigate();

  const addComment = () => {
    setComments([
      ...comments,
      {
        id: uuidv4(),
        productId,
        description: commentDescription,
        date: new Date(),
      },
    ]);

    setCommentDescription("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData({
      name,
      count,
      weight,
      size: { height, width },
      id: productId,
      comments,
    });
  };

  useEffect(() => {
    if (data) {
      navigate("/");
    }
  }, [data, navigate]);

  return (
    <div className="create">
      <h2 className="page-title">Add a New Product</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Product name:</span>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </label>

        <label>
          <span>Product count:</span>
          <input
            type="number"
            onChange={(e) => setCount(e.target.value)}
            value={count}
            required
          />
        </label>

        <label>
          <span>Product weight:</span>
          <input
            type="text"
            onChange={(e) => setWeight(e.target.value)}
            value={weight}
            required
          />
        </label>

        <label>
          <span>Comment:</span>
          <div className="comments">
            <input
              onChange={(e) => setCommentDescription(e.target.value)}
              value={commentDescription}
            ></input>

            <button className="btn-comment" type="button" onClick={addComment}>
              Add
            </button>
          </div>
          <p>
            Comments:
            {comments.map((comment) => (
              <em key={comment.id}> {comment.description}, </em>
            ))}
          </p>
        </label>

        <h4>Product size:</h4>
        <div className="size">
          <label>
            <span>Height:</span>
            <input
              type="number"
              onChange={(e) => setHeight(e.target.value)}
              value={height}
              required
            />
          </label>

          <label>
            <span>Width:</span>
            <input
              type="number"
              onChange={(e) => setWidth(e.target.value)}
              value={width}
              required
            />
          </label>
        </div>

        <div className="btns">
          <button
            type="button"
            className="btn-cancel"
            onClick={() => navigate("/")}
          >
            Cancel
          </button>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
};

export default Create;
