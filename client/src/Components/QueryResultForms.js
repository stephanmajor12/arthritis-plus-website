import FormResultListItem from "./FormResultListItem";

function QueryResultForms(props) {
    const forms = props.forms;
    const reversedForms = forms.slice().reverse(); // Reverse the forms list so that new forms appear at the top
    
    return(
        <div className="forms-container">
            <h2 className="mb-5 mt-3">Patient Forms</h2>
            {reversedForms.map((form, index) => ( // map each form to a list item
                <FormResultListItem form={form} key={index} />
            ))}
        </div>
    )
}

export default QueryResultForms;