import { Routes, Route } from "react-router-dom";
import Home from "./page/home";
import Login from "./page/login";
import Register from "./page/register";
interface AppProps { }

const App = (props: AppProps) => {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/login" Component={Login} />
      <Route path="/register" Component={Register} />
    </Routes>
  )
}

export default App;