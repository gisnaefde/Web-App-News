import React from 'react';
import Navbar from '../parts/Navbar';
import Hero from '../parts/Hero';
import Service from '../parts/Service';
import Blog from '../parts/Blog';
import Download from '../parts/Download';
import Gambar from '../assets/images/download2.png';
import Footer from '../parts/Footer';

const Home = () => {
    return (
        <div className="landingpages">
            <div className="hero-wrapper">
                <div className="box d-flex"></div>
                <div className="content-wrapper w-100">
                    <Navbar></Navbar>
                    <Hero></Hero>
                </div>
            </div>
            <div className="service-wrapper">
                <Service></Service>
            </div>
            <div className="blog-wrapper">
                <Blog></Blog>
            </div>
            <div className="download-wrapper">
                <img src={Gambar} className="trapesium"></img>
                <div className="conten-download-wrapper">
                    <Download></Download>
                </div>
            </div>
            <div className="footer-wrapper">
                <Footer></Footer>
            </div>

        </div>
    );
}
export default Home;