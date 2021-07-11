import React from 'react';
import blog1 from '../assets/images/blog1.jpg';
import blog2 from '../assets/images/blog2.jpg';

const Blog = () => {
    return (
        <section className=" container blog ">
                <h1 className="text-center"> Blog <span>Terpopuler</span></h1>
                <div className="row d-flex">
                    <div className="col-md-6">
                        <img src={blog1}></img>
                        <p>9 Juli 2021</p>
                        <h3>Kejuaraan Lari</h3>
                        <p>Lari estafet merupakan salah satu cabang dari olah rari yaitu teridi dari lebih dari satu orang, dimana setiap pelari sudah di tentukan jarak yang harus ditempuh..... </p>
                        <button  className="btn">Selengkapnya</button>
                    </div>
                    <div className='col-md-6 '>
                        <img src={blog2}></img>
                        <p>9 Juli 2021</p>
                        <h3>Sidang DPR</h3>
                        <p> Ditengah pandemi yang tak kunjung reda, membuat rakyat merasa dirinya semakin melarat, meyikapi hal itu para anggota DPR membahas untuk mengatasi masalah ini.....</p>
                        <button  className='btn'>Selengkapnya</button>
                    </div>
            </div>
        </section>
    )
}
export default Blog;