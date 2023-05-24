import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

import "./Product.css";

const Product = () => {
  const { id } = useParams();
  const url = "http://localhost:3000/products/" + id;

  const { error, isPending, data: product } = useFetch(url);

  return (
    <div className="product">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {product && (
        <>
          <h2 className="page-title">{product.name}</h2>
          <p>Weight: {product.weight}</p>
          <p>Height: {product.size["height"]}</p>
          <p>Width: {product.size["width"]}</p>
          <h5>Comments:</h5>
          {product.comments.map((comment) => {
            return <p key={comment.id}>{comment.description}</p>;
          })}
        </>
      )}
    </div>
  );
};

export default Product;
