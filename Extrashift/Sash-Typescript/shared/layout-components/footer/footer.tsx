import React, { Fragment } from 'react';
import Link from 'next/link';

const Footer = () => {

  return (
<Fragment>
<footer className="footer mt-auto py-3 bg-white text-center">
            <div className="container">
                <span className=""> Copyright © 2024<span id="year"></span> <Link
                        href="#!" className="text-primary">Sash</Link>.
                    Designed with <span className="bi bi-heart-fill text-danger"></span> by <Link href="#!">
                        <span className="text-primary">Spruko</span>
                    </Link> All
                    rights
                    reserved
                </span>
            </div>
        </footer>
</Fragment>
);
  };

export default Footer;
