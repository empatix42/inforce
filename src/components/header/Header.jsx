import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <Link to="/" className="brand">
          <h1>Product List</h1>
        </Link>

        <Link to="/create">Add Product</Link>
      </nav>
    </div>
  );
};

export default Header;
