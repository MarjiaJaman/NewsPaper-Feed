import React from "react";
import { Link } from "react-router-dom";

export default function HeaderInfo() {
  return (
    <header className="news-header">
      <div className="news-header-content">
        <Link to="/" className="news-logo" style={{ textDecoration: "none" }}>
          News<span>Feed</span>
        </Link>
        <nav className="newscategories">
          <Link to="/" className="newscategory">
            Home
          </Link>
          <Link to="/category/national" className="newscategory">
            National
          </Link>
          <Link to="/category/world" className="newscategory">
            World
          </Link>
          <Link to="/category/business" className="newscategory">
            Business
          </Link>
          <Link to="/category/technology" className="newscategory">
            Technology
          </Link>
          <Link to="/category/sports" className="newscategory">
            Sports
          </Link>
          <Link to="/category/entertainment" className="newscategory">
            Entertainment
          </Link>
        </nav>
      </div>
    </header>
  );
}
