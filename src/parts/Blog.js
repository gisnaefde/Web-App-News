import React from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const Blog = ({ posts }) => { //variabel posts ini nanti dipanggil sebagai props
    return (
        <section className=" container blog ">
            <Fade><h1 className="text-center"> Blog <span>Terpopuler</span></h1></Fade>
            <div className="row d-flex">
                <Zoom>
                    {posts &&
                        posts.map((post, index) => { //map dimaksudkan untuk membagi-bagi data pada API
                            return (
                                <div key={index} className="col-md-6">
                                    <img src={post.urlToImage} alt=""></img>
                                    <p>9 Juli 2021</p>
                                    <h3> {post.title}</h3>
                                    <p>{post.description}</p>
                                    <button className="btn">Selengkapnya</button>
                                </div>
                            )
                        })
                    }
                </Zoom>
            </div>
        </section>
    )
}
export default Blog;