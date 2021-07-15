import React from 'react';
import download1 from '../assets/images/download1.png';
import download3 from '../assets/images/download3.png';
import download4 from '../assets/images/download4.png';
import Fade from 'react-reveal/Fade';

const Download = () => {
    return (
        <section className=' download container '>
            <Fade>
                <div className='row d-flex align-items-center row2'>
                    <div className='col-12 col-md-6 download1'>
                        <h3><span>Download</span> Aplikasi <span>GIFADE NEWS</span> untuk <span>Android</span> dan <span> Ios</span></h3>
                        <img src={download3} alt="" className="photo-download2 align-items-between"></img>
                        <img src={download4} alt="" className="photo-download2 align-items-between"></img>
                    </div>
                    <div className='col-12 col-md-3 d-none d-md-block download2'>
                        <img src={download1} alt="" className='photo-download'></img>
                    </div>
                    <div className='col-12 col-md-3 download2'>
                        <h2><span>DISKON 40% UNTUK YANG BERLANGGANAN SAMPAI 17 AGUSTUS 2021</span></h2>
                    </div>
                </div>
            </Fade>
        </section>
    )
}
export default Download;