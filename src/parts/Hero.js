import React from 'react';
import photonews from '../assets/images/news.jpg';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const Hero = () => {
    return (
        <section className="container hero ">
            <div className="row d-flex align-items-center">
                <Fade bottom>
                    <div className="col-12 col-md-5 ">
                        <h1>Nikmati <span>Berita</span> Terbaru
                            dengan <span>sajian yang menarik</span></h1>
                        <p className="desc w-75" >Berita dikemas dengan unsur yang disesaikan dengan isi berita, sehingga pembaca lebih bisa memahami berita dengan cepat dan cermat.</p>
                        <button className='btn btn2'>Selengkapnya</button>
                    </div>
                </Fade>
                <Zoom>
                <div className="col-12 col-sm-7">
                    <img src={photonews} alt="" className="shadow-lg w-100 h-100"></img>
                </div>
                </Zoom>
            </div>

        </section>
    );
}
export default Hero;