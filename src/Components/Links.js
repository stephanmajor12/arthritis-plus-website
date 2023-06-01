function Links() {
    return (
      <div>
        <div className="vh-80">
          <div className="container">
            <h2 className="mt-5 text-center">Our office provides</h2>
            <div>

                {/* This should be turned into a component that takes an array of strings as parameter and renders the cards */}
              <div className="row mt-5">

                <div className="col-md-4 mb-4">
                  <div className="card h-100">
                    <div className="card-body d-flex flex-column justify-content-center align-items-center rounded">
                      <h5 className="card-title text-center">Respectful, inclusive, equitable environment</h5>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-4">
                  <div className="card h-100">
                    <div className="card-body d-flex flex-column justify-content-center align-items-center rounded">
                      <h5 className="card-title text-center">Patient centric care</h5>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-4">
                  <div className="card h-100">
                    <div className="card-body d-flex flex-column justify-content-center align-items-center rounded">
                      <h5 className="card-title text-center">Multilingual Staff</h5>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-4">
                  <div className="card h-100">
                    <div className="card-body d-flex flex-column justify-content-center align-items-center rounded">
                      <h5 className="card-title text-center">Friendly staff</h5>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-4">
                  <div className="card h-100">
                    <div className="card-body d-flex flex-column justify-content-center align-items-center rounded">
                      <h5 className="card-title text-center">Patient education through Arthritis + patient App</h5>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-4">
                  <div className="card h-100">
                    <div className="card-body d-flex flex-column justify-content-center align-items-center rounded">
                      <h5 className="card-title text-center">Hindi, Urdu, Gujarati, Marathi, Vietnamese, Igbo, Hausa, Yoruba</h5>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
        
        <div className="container">
            <h2 className="mt-5 text-center">Learn more</h2>
            <div>
                <div className="row justify-content-center mt-5 card-deck">
                    <div className="col-md-4 mb-4">
                      <a href='https://azayatech.com/' className='text-decoration-none'>
                        <div className="card big-card">
                            <div className="card-body justify-content-center align-items-center rounded text-center">
                                <h5 className='card-title'>Arthritis Plus Patient App</h5>
                                <img src={require('../app_logo_arthritis_patient.png')} className='img-responsive img-fluid' height="100" />
                            </div>
                        </div>
                        </a>
                    </div>
                    <div className="col-md-4 mb-4">
                      <a href='https://www.youtube.com/watch?v=vXvKtWTI6Us' className='text-decoration-none'>
                        <div className="card big-card">
                            <div className="card-body justify-content-center align-items-center rounded text-center">
                                <h5 className="card-title">Youtube</h5>
                                <img src={require('../youtube_logo.png')} className='img-responsive' height="100" />
                            </div>
                        </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>


      </div>
    )
  }
  
  export default Links;
  