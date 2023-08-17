import { Link } from "react-router-dom"

interface LoginProps { }

const Login = (props: LoginProps) => {
    return (
        <div>
            <h1>hello</h1>
            <p>
                or  <Link to="/register">Register</Link>
            </p>
        </div>
    )
}

export default Login;