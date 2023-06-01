import React, { Component } from 'react';

class PDFForm extends Component {
  state = {
    patientName: "",
    patientId: "",
    formName: ""
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleFileUpload = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('pdfFile', file);
    formData.append('patientName', this.state.patientName);
    formData.append('patientId', this.state.patientId);
    formData.append('formName', this.state.formName);

    fetch('http://localhost:3001/uploadpdf', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      console.log(`File uploaded with ID ${data.insertId}`);
    })
    .catch(error => {
      console.error(error);
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <form className='d-flex flex-column justify-content-center align-items-center' onSubmit={this.handleSubmit}>
        <div>
          <label>Patient Name:</label>
          <input type="text" name="patientName" value={this.state.patientName} onChange={this.handleInputChange} />
        </div>
        <div>
          <label>Patient ID:</label>
          <input type="text" name="patientId" value={this.state.patientId} onChange={this.handleInputChange} />
        </div>

        <div>
          <label>Form Name:</label>
          <input type="text" name="formName" value={this.state.formName} onChange={this.handleInputChange} />
        </div>

        <div>
          <label>PDF File:</label>
          <input type="file" onChange={this.handleFileUpload} />
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </form>
    );
  }
}

export default PDFForm;
