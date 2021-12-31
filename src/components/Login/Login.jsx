import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { required } from "../../utils/validator/validators";
import { Input } from "../common/FormControls/FormControls";
import { login } from "../../Redux/authReduser";
const LoginForm = (props) => {
  return <form onSubmit={props.handleSubmit}>
    <div>
      <Field placeholder={"email"} name={"email"} component={Input}
        validate={[required]} />
    </div>
    <div>
      <Field placeholder={"password"} component={Input} name={"password"} type={"password"}
        validate={[required]} />
    </div>
    <div>
      <Field type={"checkbox"} name={"rememberMe"} component={Input} />remember me
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
const Login2 = (props) => {
  const aonSubmit = (formData) => {
    //75 урок 32:00 formData значение из reduxForm->handleSubmit
    props.login(formData.email, formData.password, formData.rememberMe);
    //login с маленькой
    //78 18:40 логинизация
    //console.log(formData);
    //без console.log не работает
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
    <LoginReduxForm onSubmit={aonSubmit} />
  </div>
};
export default connect(null, {login})(Login2);
//login приходит из authReduser login с маленькой
