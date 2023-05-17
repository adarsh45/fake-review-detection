import React from "react";
import "./header.css";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <a className="navbar-brand" href="/">
        F.R.D.S.
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          {!localStorage.getItem("token") ? (
            <>
              <li className="nav-item">
                <a className="nav-link active" href="/register">
                  Register
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/login">
                  Login
                </a>
              </li>
            </>
          ) : (
            ""
          )}

          {localStorage.getItem("token") ? (
            <>
              <li className="nav-item">
                <a className="nav-link active" href="/reviews">
                  Reviews
                </a>
              </li>
              <li
                className="nav-item"
                style={{ position: "absolute", right: 0, marginRight: "1rem" }}
              >
                <a
                  className="nav-link active"
                  href="/"
                  onClick={() => localStorage.removeItem("token")}
                >
                  Logout
                </a>
              </li>
            </>
          ) : (
            ""
          )}
          <li className="nav-item">
            <a className="nav-link active" href="/about">
              About Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
