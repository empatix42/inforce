import { useFetch } from "../../hooks/useFetch";

import ProductList from "../../components/product-list/ProductList";

import "./Home.css";

const Home = () => {
  const { data, isPending, error } = useFetch("http://localhost:3000/products");

  return (
    <div>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <ProductList products={data} />}
    </div>
  );
};

export default Home;
