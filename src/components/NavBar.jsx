import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

function NavBar() {
  const [cartCount, setCartCount] = useState(0);
  const [search, setSearch] = useState([]);
  const navigate = useNavigate();

  function searchOnChange(event) {
    setSearch(event.target.value);
  }

  function handleSearch(event) {
    event.preventDefault();
    navigate(`/search/${search}`);
  }

  return (
    <>
      {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">Navbar</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <NavLink className="nav-link" activeClassName="active" exact to="/card">Card</NavLink>
                <NavLink className="nav-link" activeClassName="active" to="/feature">Feature</NavLink>
                <NavLink className="nav-link" activeClassName="active" to="/contact">Contact</NavLink>
                <NavLink className="nav-link" activeClassName="active" exact to="/">Home</NavLink>

            </div>
            </div>
        </div>
        </nav> */}
      {/* start nav */}
      <div className="navbar bg-lime-500 py-6 rounded-3xl shadow-lg mx-auto max-w-screen-xl">
        <div className="flex-1 flex justify-start">
          <a href="/" className="btn btn-ghost text-4xl">
            Fruitables
          </a>
        </div>
        <div className="flex-1 flex justify-center">
          <NavLink
            className="nav-link mx-4 hover:text-lime-700"
            activeClassName="active"
            exact
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="nav-link mx-4 hover:text-lime-700"
            activeClassName="active"
            to="/contact"
          >
            Contact
          </NavLink>
          <NavLink
            className="nav-link mx-4 hover:text-lime-700"
            activeClassName="active"
            to="/register"
          >
            Register
          </NavLink>
          <NavLink
            className="nav-link mx-4 hover:text-lime-700"
            activeClassName="active"
            to="/login"
          >
            Login
          </NavLink>
        </div>
        <div className="flex-1 flex justify-end items-center pr-8">
          <form onSubmit={handleSearch} className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button
                type="submit"
                title="Search"
                className="p-1 focus:outline-none focus:ring"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  className="w-4 h-4 text-gray-800"
                >
                  <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                </svg>
              </button>
            </span>
            <input
              onChange={searchOnChange}
              value={search}
              type="search"
              name="Search"
              placeholder="Search..."
              className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline bg-gray-100 text-gray-800 focus:bg-gray-50"
            />
          </form>
        </div>
        <div className="dropdown dropdown-end pr-5">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {cartCount > 0 && (
                <span className="badge badge-sm indicator-item">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-white shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">{cartCount} Items</span>
              <span className="text-info">Subtotal</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end pr-8">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
      {/* </div> */}

      {/* End nav */}
    </>
  );
}

export default NavBar;
