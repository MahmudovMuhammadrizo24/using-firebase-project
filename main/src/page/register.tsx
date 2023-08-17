import { Link } from "react-router-dom";

interface RegisterProps { }

const Register = (props: RegisterProps) => {
    return (
        <div>
            <h1>hello</h1>
            <p>
                Alredy have an account  <Link to="/login">Sign in</Link>
            </p>
        </div>

    )
}
export default Register;