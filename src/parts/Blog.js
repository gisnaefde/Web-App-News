import React from 'react';
import Zoom from 'react-reveal/Zoom';

const Blog = ({ posts }) => { //variabel posts ini nanti dipanggil sebagai props
    return (
        <section className=" container blog ">
            <Zoom>
                <h1 className="text-center"> Blog <span>Terpopuler</span></h1>
            </Zoom>
            <div className="row d-flex">
                {posts &&
                    posts.map((post, index) => { //map dimaksudkan untuk membagi-bagi data pada API
                        return (
                            <div key={index} className="col-md-6 box-blog">
                                <img src={post.urlToImage} alt='no-immage'></img>
                                <p>9 Juli 2021</p>
                                <h3> {post.title}</h3>
                                <p>{post.description}</p>
                                <button className="btn">Selengkapnya</button>
                            </div>
                        )
                    })
                }

            </div>
        </section>
    )
}
export default Blog;