import React from 'react';
import house2 from "../../img/house2.svg";
import ErrorBoundry from "../../error/error-boundry";

const Footer = () =>{
    return (
        <ErrorBoundry>
            <footer id="footer" className="footer">
            <div className="container d-flex">
                <img src={house2} alt="logo" />
                <a className="tel" href="tel:0985131382">+38 098 513-13-82</a>
            </div>
            </footer>
        </ErrorBoundry>
    );
}
export default Footer;