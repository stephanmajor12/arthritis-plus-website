function Services() {
    return(
        <div className="vh-80">
            <div className="container">
                <h2 className="mt-5 text-center">Our Services</h2>
                <div>

                    {/* This should be turned into a component that takes an array of strings as parameter and renders the cards */}
                    <div className="row mt-5">

                        <div className="col-md-4 mb-4">
                        <div className="card h-100 p-4 border-0 big-card--services">
                            <div className="card-body d-flex flex-column justify-content-center align-items-center rounded">
                            <h5 className="card-title text-center">Osteoarthritis</h5>
                            </div>
                        </div>
                        </div>

                        <div className="col-md-4 mb-4">
                            <div className="card h-100 p-4 border-0 big-card--services">
                                <div className="card-body d-flex flex-column justify-content-center align-items-center rounded">
                                <h5 className="card-title text-center">Osteoporosis</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mb-4">
                            <div className="card h-100 p-4 border-0 big-card--services">
                                <div className="card-body d-flex flex-column justify-content-center align-items-center rounded">
                                <h5 className="card-title text-center">Knee injections</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mb-4">
                            <div className="card h-100 p-4 border-0 big-card--services">
                                <div className="card-body d-flex flex-column justify-content-center align-items-center rounded">
                                <h5 className="card-title text-center">Rheumatoid Arthritis</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mb-4">
                            <div className="card h-100 p-4 border-0 big-card--services">
                                <div className="card-body d-flex flex-column justify-content-center align-items-center rounded">
                                <h5 className="card-title text-center">Gout</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mb-4">
                            <div className="card h-100 p-4 border-0 big-card--services">
                                <div className="card-body d-flex flex-column justify-content-center align-items-center rounded">
                                <h5 className="card-title text-center">Shoulder injections</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mb-4">
                            <div className="card h-100 p-4 border-0 big-card--services">
                                <div className="card-body d-flex flex-column justify-content-center align-items-center rounded">
                                <h5 className="card-title text-center">Psoriatic Arthritis</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mb-4">
                            <div className="card h-100 p-4 border-0 big-card--services">
                                <div className="card-body d-flex flex-column justify-content-center align-items-center rounded">
                                <h5 className="card-title text-center">Pseudogout</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mb-4">
                            <div className="card h-100 p-4 border-0 big-card--services">
                                <div className="card-body d-flex flex-column justify-content-center align-items-center rounded">
                                <h5 className="card-title text-center">Other joint/tendon injections</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mb-4 last-row">
                            <div className="card h-100 p-4 border-0 big-card--services">
                                <div className="card-body d-flex flex-column justify-content-center align-items-center rounded">
                                <h5 className="card-title text-center">Ankylosing Spondylitis</h5>
                                </div>
                            </div>
                        </div>

                    </div>
                    </div>

            </div>
        </div>
    )
}

export default Services;