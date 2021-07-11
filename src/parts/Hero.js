import React from 'react';
import photonews from '../assets/images/news.jpg'

const Hero = () => {
    return (
        <section className="container hero ">
            <div className="row d-flex align-items-center">
                <div className="col-12 col-md-5 ">
                    <h1>Nikmati <span>Berita</span> Terbaru
                        dengan <span>sajian yang menarik</span></h1>
                    <p  className="desc w-75" >Berita dikemas dengan unsur yang disesaikan dengan isi berita, sehingga pembaca lebih bisa memahami berita dengan cepat dan cermat.</p>
                    <button className='btn btn2'>Selengkapnya</button>
                </div>
                <div className="col-12 col-sm-7">
                    <img src={photonews} className="shadow-lg w-100 h-100"></img>
                </div>
            </div>

        </section>
    );
}
export default Hero;