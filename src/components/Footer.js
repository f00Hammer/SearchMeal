import React from "react";

const Footer = () => {
  return (
    <div>
      <h6 className="apilink">This site uses Api from: </h6>
      <a
        className="apilink"
        title="recipepuppy.com"
        href="http://www.recipepuppy.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        www.recipepuppy.com
      </a>{" "}
      <br />
      <p>Made by Jarosław Podolak 2019</p>
    </div>
  );
};

export default Footer;
