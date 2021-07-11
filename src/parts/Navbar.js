import React from 'react';

const Navbar = () => {
    return (
        <header >
            <div className="container fixed-top">
                <nav class="navbar navbar-expand-md navbar-light mt-4 navbar2">
                    <a class="navbar-brand font-weight-bold" href="#">GIFADE NEWS</a>
                    {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button> */}
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Headline</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Abouth</a>
                            </li>
                            <li class="nav-item">
                            <button type="button" class="btn btn-outline-secondary btn2">Download</button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}
export default Navbar;