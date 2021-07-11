import React from 'react';
import ig from '../assets/icons/ig.png';
import fb from '../assets/icons/fb.png';
import twitter from '../assets/icons/twitter.png';
import wa from '../assets/icons/wa.png';


const Footer = () => {
    return (
        <section className="footer container">
            <div className="row row2">
                <div className="col-md-3 cold2">
                    <h4>News</h4>
                    <p>Sport</p>
                    <p>Politic</p>
                    <p>Economi</p>
                </div>
                <div className="col-md-3 cold2">
                    <h4>Support</h4>
                    <p>Privacy & Policy</p>
                    <p>Term & Conditions</p>
                    <p>Support System</p>
                </div>
                <div className="col-md-3 cold2">
                    <h4>Our Services</h4>
                </div>
                <div className="col-md-2 cold2">
                    <h4>Contact Us</h4>
                    <img src={ig}></img>
                    <img src={wa}></img>
                    <img src={fb}></img>
                    <img src={twitter}></img>
                </div>
            </div>
        </section>
    )
}
export default Footer;