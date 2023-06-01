import React, { useState } from 'react';
import Cookies from 'js-cookie';
import QueryResultPatient from './QueryResultPatient';

function PatientQuery() {

    const [searchTerm, setSearchTerm] = useState("");
    const [patient, setPatient] = useState(undefined);
    const [patientForms, setPatientForms] = useState(undefined);

    // onChange handler for updating searchTerm
    function handleSearchTermChange(event) {
        setSearchTerm(event.target.value);
    }

    // function handleSubmit(event) {
    //     event.preventDefault();
    //     console.log('login button');
    //     // Fetch the patient information
    //     fetch('http://localhost:3001/query', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify({
    //         queryParam: searchTerm
    //       })
    //     })
    //       .then(res => { // Fetch was not OK
    //         if (!res.ok) {
    //           throw new Error('Network response was not ok');
    //         }
    //         return res.json();
    //       })
    //       .then(data => { // Fetch was OK
    //         console.log('Fetch successful:', data);
    //         setPatient(data[0]); // set patient to query result
    //       })
    //       .catch(error => { // Error occured in fetch
    //         console.error('Fetch error:', error);
    //         setPatient(undefined); // Remove the query result
    //         return error;
    //       })
    //   }

      function handleSubmit(event) {
        event.preventDefault();
        // Fetch the patient information
        fetch('http://localhost:3001/query', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            queryParam: searchTerm
          })
        })
          .then(res => { // Fetch was not OK
            if (!res.ok) {
              setPatient(undefined); // Remove the query result
              throw new Error('Network response was not ok');
            }
            return res.json();
          })
          .then(data => { // Fetch was OK
            console.log('Fetch successful:', data);
            setPatient(data[0]); // set patient to query result

            // Perform a second fetch to queryForms endpoint to fetch forms for user
            return fetch('http://localhost:3001/queryForms', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                queryParam: data[0].Demographic_id
              })
            });
          })
          .then(res => { // Second fetch was not OK
            if (!res.ok) {
              setPatientForms(undefined);
              throw new Error('Network response was not ok');
            }
            return res.json();
          })
          .then(data => { // Second fetch was OK
            console.log('Second fetch successful:', data);
            setPatientForms(data);
            // Do something with the second fetch data
          })
          .catch(error => { // Error occured in fetch
            console.error('Fetch error:', error);
            return error;
          })
      }

    return(
        <div className='query-container'>
            <h2>Patient Query</h2>
            
            <div className='patient-query-container'>
                <div className='patient-query-card'>
                    <form className='w-75' onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="text" className="form-control text-center" id="patientId" aria-describedby="patientHelp" placeholder="Patient ID" onChange={handleSearchTermChange}></input>
                            <small id="patientHelp" className="form-text text-muted">Enter the ID of the patient to query</small>
                        </div>
                        <button type="submit" className="btn btn-primary mt-5">Submit</button>
                    </form>
                </div>
            </div>
            {patient ? (
                <div className='query-container'>
                    <div>
                        <QueryResultPatient patientInfo={patient} patientForms={patientForms}/>
                    </div>
                </div>

                    ) : 
                    (<div>

                    </div>
                )}
        </div>
    )
}

export default PatientQuery;