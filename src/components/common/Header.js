import React from "react";
import {Link} from "react-router-dom";

const Header = () => (<nav className="navbar navbar-expand-md navbar-dark bg-dark justify-content-between">
        <div className="container-fluid">
            <div className="row">
                <div className="col-4">
          213
          </div>
            <div className="col-4 text-center">
                    <Link
className="navbar-brand"
                        to="/">
            ⚽ Test
            </Link>
                </div>
            <div className="col-4">
                    <button
                className="navbar-toggler btn btn-light"
                        type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                        <span className="navbar-toggler-icon" />
            </button>
                    <div
className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link"
replace
to='/'>
                  Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link"
replace
to='/schedule'>
                  Schedule
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a aria-expanded="false"
aria-haspopup="true"
className="nav-link dropdown-toggle"
data-toggle="dropdown"
href="#"
id="navbarDropdown"
role="button">
                  Dropdown
                                </a>
                                <div aria-labelledby="navbarDropdown"
className="dropdown-menu">
                                    <a
className="dropdown-item"
                                        href="#"
                    >
Action
                                    </a>
                                    <a
className="dropdown-item"
                                        href="#"
                    >
Another action
                                    </a>
                                    <div className="dropdown-divider" />
                                    <a
className="dropdown-item"
                                        href="#"
                                    >
Something here
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
        </div>
        </div>
    </nav>);
export default Header;
