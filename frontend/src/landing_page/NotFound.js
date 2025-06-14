import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container p-5 mb-5 mt-5">
      <div className="row">
        <div className="col-6 d-flex flex-column align-self-center">
          <h1 className="fs-4">404</h1>
          <p className="text-muted fs-5 mt-2">
            We couldn’t find the page you were looking <br />
            for Visit{" "}
            <Link to="/" style={{ textDecoration: "none", color: "#387ed1" }}>
              Zerodha’s home page
            </Link>
          </p>
        </div>
          
        </div>
      </div>
  );
}

export default NotFound;
