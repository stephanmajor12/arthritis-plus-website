import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import PDFForm from "./PDFForm";
import FormView from "./FormView";

function Login(props) {
    return(
        <div style={{'text-align': 'center'}}>
            <LoginForm setLoggedIn={props.setLoggedIn}/>
            <RegisterForm setLoggedIn={props.setLoggedIn}/>
        </div>
    )
}
export default Login;