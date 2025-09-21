import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <hr className="--color-dark" />
      <div className="--flex-center --py2 --bg-grey">
        <p>© {currentYear} Dobhal's. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
