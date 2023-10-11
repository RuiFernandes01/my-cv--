import React, { useState } from "react";
import "./navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // Define a function to scroll to a section when a navbar item is clicked
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      closeMobileMenu(); // Close the mobile menu after scrolling
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div
          role="button"
          tabIndex={0}
          className="navbar-logo"
          onClick={() => scrollToSection("aboutMe")}
        >
          Rui Fernandes
        </div>
        {/* ... */}
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <div
              role="button"
              tabIndex={0}
              className="nav-links"
              onClick={() => scrollToSection("aboutMe")}
            >
              About Me
            </div>
          </li>
          <li className="nav-item">
            <div
              role="button"
              tabIndex={0}
              className="nav-links"
              onClick={() => scrollToSection("workExperience")}
            >
              Work Experience
            </div>
          </li>
          <li className="nav-item">
            <div
              role="button"
              tabIndex={0}
              className="nav-links"
              onClick={() => scrollToSection("education")}
            >
              Education
            </div>
          </li>
          <li className="nav-item">
            <div
              role="button"
              tabIndex={0}
              className="nav-links"
              onClick={() => scrollToSection("skills")}
            >
              Skills
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
