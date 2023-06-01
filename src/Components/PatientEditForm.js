import React, { useState } from "react";
import axios from 'axios';

const PatientEditForm = (props) => {
  const patientInfo = props.patientInfo;

  const [name, setName] = useState(patientInfo.Name);
  const [email, setEmail] = useState(patientInfo.Email);
  const [gender, setGender] = useState(patientInfo.Gender);
  const [age, setAge] = useState(patientInfo.Age);
  const [height, setHeight] = useState(patientInfo.Height);
  const [weight, setWeight] = useState(patientInfo.Weight);
  const [prevMedicalHistory, setPrevMedicalHistory] = useState(patientInfo.Prev_medical_history);
  const [prevSurgicalId, setPrevSurgicalId] = useState(patientInfo.Prev_surgical_id);
  const [lifestyleHistory, setLifestyleHistory] = useState(patientInfo.Lifestyle_history);
  const [alcoholConsumption, setAlcoholConsumption] = useState(patientInfo.Alchohol_consumtion);
  const [drinksPerWeek, setDrinksPerWeek] = useState(patientInfo.drinks_per_week);
  const [diagnosis, setDiagnosis] = useState(patientInfo.diagnosis);
  const [yearOfDiagnosis, setYearOfDiagnosis] = useState(patientInfo.year_of_diagnosis);
  const [currentMedicines, setCurrentMedicines] = useState(patientInfo.current_medicines);
  const [priorMedicines, setPriorMedicines] = useState(patientInfo.prior_medicines);

  const [patient, setPatient] = useState(props.patientInfo);

  function setPatientOfParent(p) {
    props.setDisplayFromChild(p);
  }

  function setEditingOfParent(e) {
    props.setEditingFromChild(e);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("save clicked");
    // Submit changes to database
    console.log(patientInfo.Demographic_id);

    // construct the new patient data
    const updatedPatient = {
      Name: name,
      Email: email,
      Gender: gender,
      Age: age,
      Height: height,
      Weight: weight,
      Prev_medical_history: prevMedicalHistory,
      Prev_surgical_id: prevSurgicalId,
      Lifestyle_history: lifestyleHistory,
      Alchohol_consumtion: alcoholConsumption,
      drinks_per_week: drinksPerWeek,
      diagnosis: diagnosis,
      year_of_diagnosis: yearOfDiagnosis,
      current_medicines: currentMedicines,
      prior_medicines: priorMedicines
    };

    setPatient(updatedPatient);

    // fetch to update patient
    axios.put(`http://localhost:3001/api/patients/${patientInfo.Demographic_id}`, updatedPatient)
    .then(response => {
      console.log('Record updated:', response.data);
      // Do something with updated record, like show a success message
      setPatientOfParent(updatedPatient); // set state of patient in parent
      setEditingOfParent(false); // set state of editing in parent to hide form
    })
    .catch(error => {
      console.error('Error updating record:', error);
      // Handle error, like showing an error message to user
    });
  }
  

  // This should be changed to create components for each field, but this will do for now.
  return (
    <div className="w-100 d-flex flex-column justify-content-center align-items-center">
      <form className="w-75" onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    
        <label>Email:</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
    
        <label>Gender:</label>
        <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
    
        <label>Age:</label>
        <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
    
        <label>Height:</label>
        <input type="text" value={height} onChange={(e) => setHeight(e.target.value)} />
    
        <label>Weight:</label>
        <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)} />
    
        <label>Prev Medical History:</label>
        <input type="text" value={prevMedicalHistory} onChange={(e) => setPrevMedicalHistory(e.target.value)} />
    
        <label>Prev Surgical ID:</label>
        <input type="text" value={prevSurgicalId} onChange={(e) => setPrevSurgicalId(e.target.value)} />
    
        <label>Lifestyle History:</label>
        <input type="text" value={lifestyleHistory} onChange={(e) => setLifestyleHistory(e.target.value)} />
    
        <label>Alcohol Consumption:</label>
        <input type="text" value={alcoholConsumption} onChange={(e) => setAlcoholConsumption(e.target.value)} />
    
        <label>Drinks Per Week:</label>
        <input type="text" value={drinksPerWeek} onChange={(e) => setDrinksPerWeek(e.target.value)} />
    
        <label>Diagnosis:</label>
        <input type="text" value={diagnosis} onChange={(e) => setDiagnosis(e.target.value)} />
    
        <label>Year of Diagnosis:</label>
        <input type="text" value={yearOfDiagnosis} onChange={(e) => setYearOfDiagnosis(e.target.value)} />
    
        <label>Current Medicines:</label>
        <input type="text" value={currentMedicines} onChange={(e) => setCurrentMedicines(e.target.value)} />
    
        <label>Prior Medicines:</label>
        <input type="text" value={priorMedicines} onChange={(e) => setPriorMedicines(e.target.value)} />

        <button type="submit" className="btn btn-primary mt-5">Save</button>
      </form>
    </div>
  );
  
}

export default PatientEditForm;