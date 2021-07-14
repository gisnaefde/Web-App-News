import React from 'react';
import ig from '../assets/icons/ig.png';
import fb from '../assets/icons/fb.png';
import twitter from '../assets/icons/twitter.png';
import wa from '../assets/icons/wa.png';


const Footer = () => {

    function top(){
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
    return (
        <section className="footer container">
            <div className="row justify-content-center row2">
                <div className="col-md-3 cold2">
                    <h4>News</h4>
                    <p>Politik</p>
                    <p>Ekonomi</p>
                    <p>Kesehatan</p>
                    <p>Olahraga</p>
                </div>
                <div className="col-md-3 cold2">
                    <h4>Support</h4>
                    <p>Privacy & Policy</p>
                    <p>Term & Conditions</p>
                    <p>Support System</p>
                </div>
                <div className="col-md-3 cold2">
                    <h4>Our Services</h4>
                    <p>New News</p>
                    <p>Aktual</p>
                    <p>Realtime</p>
                </div>
                <div className="col-md-2 cold2">
                    <h4>Contact Us</h4>
                    <img src={ig} alt=""></img>
                    <img src={wa} alt=""></img>
                    <img src={fb} alt="" ></img>
                    <img src={twitter} alt="" ></img>
                    <button onClick={()=>top()}>TOP</button>
                </div>
            </div>
        </section>
    )
}
export default Footer;