import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
const LoginForm = (props) => {
  return <form onSubmit={props.handleSubmit}>
    <div>
      <Field placeholder={"login"} name={"Login"} component={"input"} />
    </div>
    <div>
      <Field placeholder={"password"} component={"input"} name={"password"} />
    </div>
    <div>
      <Field type={"checkbox"} name={"rememberMe"} component={"input"} />remember me
    </div>
    <div>
      <button>Login</button>
    </div>
  </form>
  //внутри handleSubmit находится formData
};
const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);
/*обворачиваем (хоком reduxForm) компоненту LoginForm
 и получаем контейнерную  компоненту LoginReduxForm */
const Login = (props) => {
  const aonSubmit=(formData)=>{
    //75 урок 32:00 formData значение из reduxForm->handleSubmit
console.log(formData);
//без console.log не работает
//Login: "5y4yyt", password: "545y64554", rememberMe: true 
/* mapStateToProps = (state) => {
  return { form: state.form };
};
let mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: () => {
      dispatch(onSubmitAC());
    },
  };
};*/
  }
  return <div>
    <h1>LOGIN</h1>
    <LoginReduxForm onSubmit={aonSubmit}/>
  </div>
};
export default Login//= connect(mapStateToProps,mapDispatchToProps)();
