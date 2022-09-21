import React from "react";

function Footer() {
  const Year = new Date().getFullYear();
  return <p>Copyright @ {Year}</p>;
}

export default Footer;
