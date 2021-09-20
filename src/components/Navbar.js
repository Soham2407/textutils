import React from "react";

const Navbar = ({ mode, theme, toggleDarkMode, selectHandler }) => {
  console.log(theme);
  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          TextUtils
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                About
              </a>
            </li>
          </ul>
          <div className="me-3">
            <select
              className="form-select form-select-sm"
              aria-label=".form-select-sm example"
              onChange={selectHandler}
              value={theme}
            >
              <option selected value="light">
                Defalut
              </option>
              <option value="primary">Primary</option>
              <option value="danger">Danger</option>
              <option value="success">Success</option>
              <option value="warning">Warning</option>
            </select>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
              onClick={toggleDarkMode}
            />
            <label
              className={`form-check-label text-${
                mode === "light" ? "dark" : "light"
              }`}
              htmlFor="flexSwitchCheckDefault"
            >
              Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
