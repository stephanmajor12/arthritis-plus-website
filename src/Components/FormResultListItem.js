import React, { useState } from 'react';
import axios from 'axios';

function FormResultListItem(props) {
    const form = props.form;
    const [isDeleted, setIsDeleted] = useState(false);
    const [showDelete, setShowDelete] = useState(false);

    // Date formatting
    const date = new Date(form.date_uploaded);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const readableDate = `${month}/${day}/${year}`;

    // delete button handler
    function handleDeleteClick() {
        console.log("handleDeleteClick: Patient ID = " + form.patient_id + " Form ID = " + form.id);
        showDeleteConfirmation();
    }
    
    // show delete confirmation
    function showDeleteConfirmation() {
        setShowDelete(true);
    }

    // hide delete confirmation
    function hideDeleteConfirmation() {
        setShowDelete(false);
    }

    // Delete form
    function confirmDelete() {
        console.log("Deleting Form with ID = " + form.id);

        axios.delete(`http://localhost:3001/api/forms/${form.id}`)
            .then(response => {
                console.log('Form deleted successfully');
                hideDeleteConfirmation();
                setIsDeleted(true);
            })
            .catch(error => {
                console.error('Error deleting form:', error);
            });
    }

    // Download PDF - PARAMS (BUFFER PDF)
    const downloadPdf = (pdfData) => {
        const patientName = form.patient_name.replace(/\s+/g, '_'); // replace spaces with underscore
        const blob = new Blob([new Uint8Array([...pdfData.data])], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = patientName + "_Form" + form.id + '.pdf';
        link.click();
        URL.revokeObjectURL(url);
      };
    
      // download button handler
      const handleDownloadPdf = () => {
        downloadPdf(form.file_data);
      };
    

    // If deleted, do not show
    if (isDeleted) {
        return null;
    }

    return(
        <div className="form-result--container">
            <div className="form-result--left">
                <span>{form.form_name}</span>
                <span>{readableDate}</span>
            </div>

            {showDelete ? 
            (
                <div className="form-result--right">
                    <div className="form-result--button form-result--button-view" onClick={hideDeleteConfirmation}>
                        <span>Cancel</span>
                    </div>
                    <div className="form-result--button form-result--button-delete" onClick={confirmDelete}>
                        <span>Delete</span>
                    </div>
                </div>
            ) 
            : 
            (
            <div className="form-result--right">
                <div className="form-result--button form-result--button-view" onClick={handleDownloadPdf}>
                    <span>Download</span>
                </div>
                <div className="form-result--button form-result--button-delete" onClick={handleDeleteClick}>
                    <span>Delete</span>
                </div>
            </div>
            )}
        </div>
    )
}

export default FormResultListItem;