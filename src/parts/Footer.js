import React from 'react';
import ig from '../assets/icons/ig.png';
import fb from '../assets/icons/fb.png';
import twitter from '../assets/icons/twitter.png';
import wa from '../assets/icons/wa.png';
import Arrow from '../assets/images/arrow-top.png';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';


const Footer = () => {

    function top() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (

        <section className="footer ">
            <Bounce bottom >
                <img
                    src={Arrow}
                    width={45}
                    className="arrow"
                    alt=""
                    onClick={() => top()}
                />
            </Bounce>
            <Fade bottom >
                <div className="container">
                    <div className="row row2">
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
                        </div>
                    </div>
                </div>
            </Fade>
        </section>
    )
}
export default Footer;