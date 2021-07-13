import React from 'react';

const Blog = ({ posts }) => { //variabel posts ini nanti dipanggil sebagai props
    return (
        <section className=" container blog ">
            <h1 className="text-center"> Blog <span>Terpopuler</span></h1>
            <div className="row d-flex">
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

            </div>
        </section>
    )
}
export default Blog;