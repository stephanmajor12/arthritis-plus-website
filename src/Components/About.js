import Map  from './Map'
function About() {
    return(
        <div className='container d-flex flex-column justify-content-center align-items-center w-100 h-100'>
            <div className='mt-3'>
                <h2>Where you can find us</h2>
            </div>
            <Map />

            <h2 className='mt-3'>Hours of operation</h2>
            <div style={{width: '100%'}}>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                        <th scope="col">Day</th>
                        <th scope="col">Hours</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">Monday</th>
                        <td>9:00 AM - 4:30 PM </td>
                        </tr>
                        <tr>
                        <th scope="row">Tuesday</th>
                        <td>9:00 AM - 4:30 PM</td>
                        </tr>
                        <tr>
                        <th scope="row">Wednesday</th>
                        <td>9:00 AM - 4:30 PM</td>
                        </tr>
                        <tr>
                        <th scope="row">Thursday</th>
                        <td>9:00 AM - 4:30 PM</td>
                        </tr>
                        <tr>
                        <th scope="row">Friday - Sunday</th>
                        <td>CLOSED</td>
                        </tr>
                    </tbody>
                </table>
                <h6 className='text-center'>Schedule subject to change weekly without notice</h6>
            </div>
        </div>
    )
}

export default About;