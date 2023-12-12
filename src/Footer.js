import React from "react";
import logo from './assets/Logo .svg'
const Footer = () =>{
    return(
        <footer>
            <section>
                <div className="company-info">
                    <img src={logo} />
                    <p>Bla bla bLasnd a sd as das a sa sa  s as a sa a s </p>
                </div>
                <div>
                    <h3>Important Links</h3>
                    <ul>
                        <li><a href='/'>Home</a></li>
                    </ul>
                </div>
            </section>
        </footer>
    );
};

export default Footer;