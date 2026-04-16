import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" href="/">
        Navbar
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" href="/">
              Home
            </Link>
          </li>

          <li className="nav-item">
        <Link className="nav-link" href="/products">Products</Link>
          </li>

          <li className="nav-item">
            <Link  className="nav-link" href="/products/create">Add Product</Link>

          </li>

          
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;