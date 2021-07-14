import React, { useEffect } from 'react';
import Navbar from '../parts/Navbar';
import Hero from '../parts/Hero';
import Service from '../parts/Service';
import Blog from '../parts/Blog';
import Download from '../parts/Download';
import Gambar from '../assets/images/download2.png';
import Footer from '../parts/Footer';
import Axios from 'axios';
import { useState } from 'react';

const Home = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        Axios.get('https://newsapi.org/v2/top-headlines?country=id&apiKey=e4f4cec6fd384db4bb6b9a75c91cf075')
            .then((result) => {
                setData(result.data.articles);
                console.log(result.data);
            })
            .catch((err) => {
                console.log(err?.response?.data?.message)
            })
    }, []);


    return (
        <div className="landingpages">
            <div className="box d-flex"></div>
            <div className="hero-wrapper container">
                <div className="content-wrapper">
                    <Navbar></Navbar>
                    <Hero></Hero>
                </div>
            </div>
            <div className="service-wrapper">
                <Service></Service>
            </div>
            <div className="blog-wrapper">
                <Blog posts={data}></Blog>
            </div>
            <div className="download-wrapper">
                <img src={Gambar} alt="" className="trapesium"></img>
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