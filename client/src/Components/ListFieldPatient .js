function ListFieldPatient(props) {
    const keyValue = props.keyValue;
    const value = props.value;
    // console.log("lfp constructed " + key + " " + value)
    return(
            <li className="patient-li" key={keyValue}>
                <span>{keyValue} : {value}</span>
            </li>
    )
}

export default ListFieldPatient;