import React from 'react';
import service1 from '../assets/images/blog1.jpg';
import service2 from '../assets/images/blog2.jpg';
import service3 from '../assets/images/service3.png';
const Service = () => {
    return (
        <section className="service">
            <div className="container ">
                <div className="row d-flex align-items-center">
                    <div className="col-md-2.5 photo">
                        <div class="d-flex flex-column bd-highlight mb-3 ">
                            <img src={service1} class=" bd-highlight between service1"></img>
                            <img src={service2} class=" bd-highlight service2"></img>
                        </div>
                    </div>
                    <div className="col-md-2.5 photo">
                        <div class="d-flex  bd-highlight mb-3">
                            <img src={service3} class="p-2  bd-highlight service3"></img>
                        </div>
                    </div>
                    <div className="col-md-7 ">
                        <div className="text">
                            <h2>Konten <span>Berita</span></h2>
                            <p>Konten yang dimuat merupakan konten ang bersifat realtime dengan isu-isu terbaru khusunya yang terjadi di Indonesia. Isi konten terjamin aktualitasnya karena bersumber dari media yang terpercata. Disamping itu konten yang dimuat juga beragam mulai dari politik, ekonomi, kesehatan dan juga olahraga.</p>
                            <h5>Silahkan pilih salah satu kategori konten yang anda sukai untuk dapat menjelajahi nya lebih lanjut.</h5>
                            <ul>
                                <li>Politik</li>
                                <li>Ekonomi</li>
                                <li>Kesehatan</li>
                                <li>Olahraga</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default Service;