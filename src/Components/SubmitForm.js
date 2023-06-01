import React, { Component } from 'react';

class SubmitForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
        name: '',
        email: '',
        gender: '',
        age: '',
        height: '',
        weight: '',
        prevmedicalhistory: '',
        prevsurgicalid: '',
        lifestylehistory: '',
        alcoholconsumption: '',
        drinksperweek: '',
        diagnosis: '',
        yearofdiagnosis: '',
        currentmedicines: '',
        priormedicines: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleGenderChange = this.handleGenderChange.bind(this);
    this.handleAgeChange = this.handleAgeChange.bind(this);
    this.handleHeightChange = this.handleHeightChange.bind(this);
    this.handleWeightChange = this.handleWeightChange.bind(this);
    this.handlePrevMedicalHistoryChange = this.handlePrevMedicalHistoryChange.bind(this);
    this.handlePrevSurgicalIdChange = this.handlePrevSurgicalIdChange.bind(this);
    this.handleLifestyleHistoryChange = this.handleLifestyleHistoryChange.bind(this);
    this.handleAlcoholConsumptionChange = this.handleAlcoholConsumptionChange.bind(this);
    this.handleDrinksPerWeekChange = this.handleDrinksPerWeekChange.bind(this);
    this.handleDiagnosisChange = this.handleDiagnosisChange.bind(this);
    this.handleYearOfDiagnosisChange = this.handleYearOfDiagnosisChange.bind(this);
    this.handleCurrentMedicinesChange = this.handleCurrentMedicinesChange.bind(this);
    this.handlePriorMedicinesChange = this.handlePriorMedicinesChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch('http://localhost:3001/patients', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        gender: this.state.gender,
        age: this.state.age,
        height: this.state.height,
        weight: this.state.weight,
        prevmedicalhistory: this.state.prevmedicalhistory,
        prevsurgicalid: this.state.prevsurgicalid,
        lifestylehistory: this.state.lifestylehistory,
        alcoholconsumption: this.state.alcoholconsumption,
        drinksperweek: this.state.drinksperweek,
        diagnosis: this.state.diagnosis,
        yearofdiagnosis: this.state.yearofdiagnosis,
        currentmedicines: this.state.currentmedicines,
        priormedicines: this.state.priormedicines
      })
    })
      .then(res => res.json())
      .then(patient => {
        this.props.addPatient(patient);
        this.setState({
            name: '',
            email: '',
            gender: '',
            age: '',
            height: '',
            weight: '',
            prevmedicalhistory: '',
            prevsurgicalid: '',
            lifestylehistory: '',
            alcoholconsumption: '',
            drinksperweek: '',
            diagnosis: '',
            yearofdiagnosis: '',
            currentmedicines: '',
            priormedicines: '',
        });
      })
      .catch(console.error);
  }


  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handleGenderChange(event) {
    this.setState({ gender: event.target.value });
  }

  handleAgeChange(event) {
    this.setState({ age: event.target.value });
  }

  handleHeightChange(event) {
    this.setState({ height: event.target.value });
  }

  handleWeightChange(event) {
    this.setState({ weight: event.target.value });
  }

  handlePrevMedicalHistoryChange(event) {
    this.setState({ prevmedicalhistory: event.target.value });
  }

  handlePrevSurgicalIdChange(event) {
    this.setState({ prevsurgicalid: event.target.value });
  }

  handleLifestyleHistoryChange(event) {
    this.setState({ lifestylehistory: event.target.value });
  }

  handleAlcoholConsumptionChange(event) {
    this.setState({ alcoholconsumption: event.target.value });
  }

  handleDrinksPerWeekChange(event) {
    this.setState({ drinksperweek: event.target.value });
  }

  handleDiagnosisChange(event) {
    this.setState({ diagnosis: event.target.value });
  }

  handleYearOfDiagnosisChange(event) {
    this.setState({ yearofdiagnosis: event.target.value });
  }

  handleCurrentMedicinesChange(event) {
    this.setState({ currentmedicines: event.target.value });
  }

  handlePriorMedicinesChange(event) {
    this.setState({ priormedicines: event.target.value });
  }

  render() {
    return (
      <form style={{width: '50%',display: 'inline-block', 'text-align': 'left', 'padding-right': '5%', 'padding-left': '5%','border-radius': '0.375rem', 'border': 'solid 1px lightgrey', 'padding-top': '1%', 'padding-bottom': '1%' }} onSubmit={this.handleSubmit}>
        <h3 style={{'text-align': 'center'}}>Patient Intake Form</h3><br/>
            <div class="form-group">
              <label for="name">Name:</label>
              <input type="text" class="form-control" id="name" value={this.state.name} onChange={this.handleNameChange}/>
            </div>
            <div class="form-group">
              <label for="email">Email:</label>
              <input type="email" class="form-control" id="email" value={this.state.email} onChange={this.handleEmailChange}/>
            </div>
            <div class="form-group">
              <label for="gender">Gender:</label>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="gender" id="male" value={this.state.gender} onChange={this.handleGenderChange}></input>
                  <label class="form-check-label" for="male">
                    Male
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="gender" id="female" value={this.state.gender} onChange={this.handleGenderChange}></input>
                  <label class="form-check-label" for="female">
                    Female
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="gender" id="other"></input>
                  <label class="form-check-label" for="other">
                    Other:
                  </label>
                  <input type="text" class="form-control" id="gender" value={this.state.gender} onChange={this.handleGenderChange}/>
                </div>
            </div>
            <div class="form-group">
              <label for="age">Age:</label>
              <input type="number" class="form-control" id="age" value={this.state.age} onChange={this.handleAgeChange}/>
            </div>
            <div class="form-group">
              <label for="height">Height (in cm):</label>
              <input type="number" class="form-control" id="height" value={this.state.height} onChange={this.handleHeightChange}/>
            </div>
            <div class="form-group">
              <label for="weight">Weight (in kg):</label>
              <input type="number" class="form-control" id="weight" value={this.state.weight} onChange={this.handleWeightChange}/>
            </div>
            <div class="form-group">
              <label for="medical_history">Previous Medical History:</label>
              <textarea class="form-control" id="medical_history" value={this.state.prevmedicalhistory} onChange={this.handlePrevMedicalHistoryChange} ></textarea>
            </div>
            <div class="form-group">
              <label for="surgical_history">Previous Surgical ID:</label>
              <textarea class="form-control" id="surgical_history" value={this.state.prevsurgicalid} onChange={this.handlePrevSurgicalIdChange}></textarea>
            </div>
            <div class="form-group">
              <label for="lifestyle_history">Lifestyle History:</label>
              <textarea class="form-control" id="lifestyle_history" value={this.state.lifestylehistory} onChange={this.handleLifestyleHistoryChange}></textarea>
            </div>
            <div class="form-group">
              <label for="alcohol_consumption">Alcohol Consumption:</label>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="alcohol_consumption" id="yesconsumption" value={this.state.alcoholconsumption} onChange={this.handleAlcoholConsumptionChange}></input>
                  <label class="form-check-label" for="yesconsumption">
                    Yes
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="alcohol_consumption" id="noconsumption" value={this.state.alcoholconsumption} onChange={this.handleAlcoholConsumptionChange}></input>
                  <label class="form-check-label" for="noconsumption">
                    No
                  </label>
                </div>
            </div>
            <div class="form-group">
              <label for="drinks_per_week">Drinks per Week:</label>
              <input type="number" class="form-control" id="drinks_per_week" value={this.state.drinksperweek} onChange={this.handleDrinksPerWeekChange}/>
            </div>
            <div class="form-group">
              <label for="diagnosis">Diagnosis:</label>
              <textarea class="form-control" id="diagnosis" value={this.state.diagnosis} onChange={this.handleDiagnosisChange}></textarea>
            </div>
            <div class="form-group">
              <label for="year_of_diagnosis">Year of Diagnosis:</label>
              <input type="number" class="form-control" id="year_of_diagnosis" value={this.state.yearofdiagnosis} onChange={this.handleYearOfDiagnosisChange}/>
            </div>
            <div class="form-group">
              <label for="current_medicines">Current Medicines:</label>
              <textarea class="form-control" id="current_medicines" value={this.state.currentmedicines} onChange={this.handleCurrentMedicinesChange}></textarea>
            </div>
            <div class="form-group">
              <label for="prior_medicines">Prior Medicines:</label>
              <textarea class="form-control" id="prior_medicines" value={this.state.priormedicines} onChange={this.handlePriorMedicinesChange}></textarea>
            </div><br/>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
    );
  }
}

export default SubmitForm;
