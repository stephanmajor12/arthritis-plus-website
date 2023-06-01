import SubmitForm from "./SubmitForm";
import FormView from "./FormView";
import PDFForm from "./PDFForm";
import PatientQuery from "./PatientQuery";
import Cookies from 'js-cookie';
import React, { useState } from 'react';

function ProviderPortal() {
    // Check for the authToken cookie
    const authToken = Cookies.get('authToken'); // check for auth cookie

    const [currentActivity, setCurrentActivity] = useState(undefined);

    const handleQueryPatientClick = () => {
        setCurrentActivity(1);
    }

    const handleInsertPatientClick = () => {
        setCurrentActivity(2);
    }

    const handleUploadPdfClick = () => {
        setCurrentActivity(3);
    }

    const handleBackButtonClick = () => {
        setCurrentActivity(undefined);
    }

    // logic for rendering based on current activity
    let content;
    if (currentActivity == undefined) { // show buttons
        content =  <div className="portal-square-container">

        <div className="portal-square">
            {/* <PDFForm></PDFForm> */}
            <button className="w-100 h-100 bg-transparent text-dark" onClick={handleQueryPatientClick}>
                <p>Query Patient</p>
            </button>
        </div>

        <div className="portal-square">
            {/* <SubmitForm></SubmitForm> */}
            <button className="w-100 h-100 bg-transparent text-dark" onClick={handleInsertPatientClick}>
                <p>Insert New Patient</p>
            </button>
        </div>
        
        <div className="portal-square">
            {/* <PDFForm></PDFForm> */}
            <button className="w-100 h-100 bg-transparent text-dark" onClick={handleUploadPdfClick}>
                <p>Upload PDF to Existing Patient</p>
            </button>
        </div>
    </div>;

    } else if (currentActivity == 1) { // show submit form
        content = <PatientQuery />
    } else if (currentActivity == 2) { // show submit form
        content = <SubmitForm />
    } else if (currentActivity == 3) { // show pdf form
        content = <PDFForm />
    }
    return(
        <div style={{'text-align': 'center'}}>
            {authToken ? ( // If authToken exists, render the provider portal
                <div>
                    <h2>Provider Portal</h2><br/>
                    {currentActivity !== undefined ? (
                        <button className="provider-back-button" onClick={handleBackButtonClick}>Back</button>
                    ) : (
                        null
                    )}
                    
                    {content}
                    
                </div>
            ) : ( // If authToken does not exist, render button that redirects to login page
                <h1>You need to log in first</h1>
            )}
        </div>
    )
}
export default ProviderPortal;