import svgFile from '../down-arrow.svg';
import svgFileWave from '../wave5.svg';

function Home() {
    const landingPageHeight = `calc(100vh - 56px)`;
    const nextPageHeight = `calc(100vh - 0px)`;
    
    const scrollToNextPage = () => {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    };


    const svgWaveStyle = {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '50%',
      zIndex: '-1',
      background: `url(${svgFileWave})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
  };
    return(
<>
      <div className="jumbotron jumbotron-fluid" style={{ height: landingPageHeight }}>
        <div className="container d-flex flex-column justify-content-center align-items-center h-100">
          <img src={require('../hospital_drawing.png')} className='' height="100" />
          <h1 className="display-4 text-center">West Mountain Medical Center</h1>
          <p className="lead text-center">
            Welcome to our Arthritis Clinic - serving Hamilton and the neighboring areas for over a decade.
          </p>
          <hr className="my-4" />
          <p className="text-center">
            We provide a safe, respectful and caring environment for our patients. We are passionate about providing the highest quality of care for our arthritis patient.
          </p>

          <span className='mt-5'>Learn More</span>

          <button className="btn-link" onClick={scrollToNextPage}>
            <img src={svgFile} className="down-arrow" alt="React Logo" style={{height: '20px'}}/>
          </button>
        </div>
      </div>
      <div className="jumbotron jumbotron-fluid dr-about-page" style={{ height: nextPageHeight }}>
        <div className="container d-flex flex-column justify-content-center align-items-center h-100">
        <div className="jumbotron jumbotron-fluid dr-about-page" style={{ height: nextPageHeight }}>
        <div className="container d-flex flex-column justify-content-center align-items-center h-100">
          <div className='dr-about-page-inner w-80 h-75 justify-content-center align-items-center'>
            <div className='dr-about-page-inner-right'>
              <img src={require('../manisha.jpg')} className='img-fluid' style={{height: "100%", width: "100%"}} />
            </div>
            <div className='dr-about-page-inner-left'>
              <span>Manisha Mulgund is a community Rheumatologist in Hamilton. She completed her Internal Medicine Residency and Rheumatology Fellowship at McMaster University. With over a decade of experience in Rheumatology, she is well-equipped to provide comprehensive diagnosis, treatment and management plans for her patients. In 2014, she opened her clinic in Hamilton and continued to work as an Internist/Acute Care Hospitalist at Trillium Health Partners - Credit Valley Hospital in Mississauga. She finds working in both these diverse environments not only interesting but immensely gratifying.<br/><br/>She has a special interest in managing Inflammatory Arthritis specifically Rheumatoid Arthritis, Psoriatic Arthritis and Ankylosing Spondylitis.  She believes in providing timely access to Rheumatology care, especially for patients with Early Inflammatory Arthritis (EIA) and runs an EIA clinic to meet this need. She treats her patients with dignity and partners with them to make their health care decisions. She is passionate about patient education and empowerment. With the support of her patients, she has developed an app for patients with Inflammatory Arthritis named  "Arthritis + Patient ". It is a free app available on android and iOS platforms. She supports her patients not only with medical knowledge but also with a more holistic approach to improving lifestyle and overall health.<br/><br/>Her clinic focuses on providing an inclusive, safe and respectful environment that welcomes all patients from diverse backgrounds. The staff at the clinic are from diverse cultures and are able to communicate with patients in multiple languages including English, Vietnamese, Marathi, Hindi, Urdu,  Gujarati and Kutcchi.<br/><br/>After joining the Rotary Club of Ancaster many years ago, she has volunteered at several community based-activities including bottle drives and spelling bee. She loves to be at home and spend time with her supportive family. She enjoys nature walks, reading books and traveling. Ultimately, she believes in living simply and being environmentally friendly. She practices mindfulness and meditation as she finds it is a key approach to achieving positive mental well-being.</span>
            </div>
          </div>
        </div>
</div>

        </div>
      </div>
      <div style={svgWaveStyle}></div>
    </>
    )
}

export default Home;