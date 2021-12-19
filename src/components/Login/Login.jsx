import React from "react";
import { reduxForm } from "redux-form";
const LoginForm = (props) => {
  return <form>
    <div>
      <input placeholder={"login" }/>
    </div>
    <div>
      <input placeholder={"password"}/>
    </div>
    <div>
      <input type={"checkbox"} />remember me
    </div>
    <div>
      <button>Login</button>
    </div>
  </form>
};
const loginReduxForm = reduxForm({form: "login"})(LoginForm);
//по типу connect
const Login = (props) => {
  return (
    <div>
      <h1>LOGIN</h1>
      <loginReduxForm />
    </div>)
};
export default Login;
