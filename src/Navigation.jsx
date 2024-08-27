import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleMenu = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className={isCollapsed ? "collapsed" : ""}>
      <button className="toggle-button" onClick={toggleMenu}>
        >
      </button>
      <ul>
        <li>
          <Link to="/" data-icon="🏠">
            Home
          </Link>
        </li>
        {Array.from({ length: 10 }, (_, index) => (
          <li key={index}>
            <Link to={`/exercise${index + 1}`} data-icon={`E${index + 1}`}>
              Exercise {index + 1}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
