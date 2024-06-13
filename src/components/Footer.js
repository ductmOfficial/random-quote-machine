import React from 'react';
import { Button } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className="text-center mt-2">
      <Button
        variant="link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/ductmOfficial/reactjs-portfolio-callmekathy"
        className="text-decoration-none text-white"
      >
        by @ductmOfficial
      </Button>
    </div>
  );
};

export default Footer;
