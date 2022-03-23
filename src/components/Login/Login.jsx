import React from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { required } from "../../utils/validator/validators";
import { input } from "../common/FormControls/FormControls";
import { login } from "../../Redux/authReduser";
import { Redirect } from "react-router-dom";
import styles from "../common/FormControls/FormControls.module.css";
import {createField} from "../common/FormControls/FormControls";
const LoginForm = ({handleSubmit,error}) => {
  // убрал слово props
  return <form onSubmit={handleSubmit}>
    {createField("Email","email",[required],input,)}
    {createField("Password","password",[required],input,{type:"password"})}
    {createField(null,"rememberMe",[],input,{type:"checkbox"},"remember me")}
    {error&&<div className={styles.formSummaryError}>
     {error}
    </div>}
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
  if (props.isAuth) {
    return <Redirect to={'/profile'}/>
  } 
  return <div>
    <h1>LOGIN</h1>
    <LoginReduxForm onSubmit={aonSubmit} />
  </div>
};
const mapStateToProps=(state)=>({
  isAuth:state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login2);
//login приходит из authReduser login с маленькой
