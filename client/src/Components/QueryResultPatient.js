import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import ListFieldPatient from './ListFieldPatient ';
import QueryResultForms from './QueryResultForms';
import PatientEditForm from './PatientEditForm';

function QueryResultPatient(props) {

    const patientInfo = props.patientInfo;
    const patientForms = props.patientForms;

    const [editing, setEditing] = useState(false);
    const [displayPatient, setDisplayPatient] = useState(props.patientInfo);

    function setPatientFromChild(patient) {
        setDisplayPatient(patient);
    }

    function setEditingFromChild(editing) {
        setEditing(editing);
    }

    // button handler for edit
    function editHandler() {
        if (editing) {
            setEditing(false);
        } else {
            setEditing(true);
        }
    }
    
    return(
        <div>
            <div className='queryResultPatient-container'>
                <h3>Query Results</h3>

                <button type="button" className="btn btn-primary mb-2" onClick={editHandler}>Edit</button>
                
                {editing ? (
                    <div>
                        <PatientEditForm patientInfo={patientInfo} setDisplayFromChild={setPatientFromChild} setEditingFromChild={setEditingFromChild}/>
                    </div>
                ) : (
                    <ul className='list-group query-ul-patient'>
                        {Object.entries(displayPatient).map(([key, value]) => { // Create a field for each key value pair of the patient
                            return <ListFieldPatient keyValue={key} value={value} />
                        })}
                    </ul>
                )}

                {patientForms ? ( // forms found for patient
                    <QueryResultForms forms={patientForms}/>
                ) : ( // No forms found for patient
                    <div>No forms found for patient</div>
                )}
            </div>
        </div>
    )
}

export default QueryResultPatient;