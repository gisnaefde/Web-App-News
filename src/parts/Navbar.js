import React from 'react';

const Navbar = () => {
    return (
        <header>
            <nav className=" container fixed-top navbar navbar-expand-md navbar-light  navbar2">
                <a className="navbar-brand font-weight-bold" href="/">GIFADE NEWS</a>
                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Headline</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Abouth</a>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn btn-outline-secondary btn2">Download</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
export default Navbar;