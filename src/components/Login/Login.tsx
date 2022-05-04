import React, { FC } from "react";
import { connect } from "react-redux";
import { InjectedFormProps, reduxForm } from "redux-form";
import { required } from "../../utils/validator/validators";
import { input } from "../common/FormControls/FormControls";
import { login } from "../../Redux/authReduser";
import { Redirect } from "react-router-dom";
import styles from "../common/FormControls/FormControls.module.css";
import { createField } from "../common/FormControls/FormControls";
import { AppStateType } from "../../Redux/new-store";
type LoginFormOwnProps={
  capchaUrl:string|null
}
const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType,LoginFormOwnProps>& LoginFormOwnProps > = 
({ handleSubmit, error, capchaUrl }) => {
  return <form onSubmit={handleSubmit}>
    {createField<LoginFormValuesTypeKeys>("Email", "email", [required], input,)}
    {createField<LoginFormValuesTypeKeys>("Password", "password", [required], input, { type: "password" })}
    {createField<LoginFormValuesTypeKeys>(undefined, "rememberMe", [], input, { type: "checkbox" }, "remember me")}
    {/*          <LoginFormValuesTypeKeys> описание ниже */}
    {/* ниже капча */}
    {capchaUrl && <img src={capchaUrl} />}
    {capchaUrl && createField<LoginFormValuesTypeKeys>("Введите капчу", "captcha", [required], input, {})}

    {error && <div className={styles.formSummaryError}>
      {error}
    </div>}
    <div>
      <button>Login</button>
    </div>
  </form>
  //внутри handleSubmit находится formData
};
const LoginReduxForm = reduxForm<LoginFormValuesType,LoginFormOwnProps>({ form: "login" })(LoginForm);
/*обворачиваем (хоком reduxForm) компоненту LoginForm
 и получаем контейнерную  компоненту LoginReduxForm */
type MapStateToPropsType = {
  isAuth: boolean,
  capchaUrl: string | null
}
type MapDispatchPropsType = {
  login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}
type LoginFormValuesType = {
  email: string,
  password: string,
  rememberMe: boolean,
  captcha: string
}
type LoginFormValuesTypeKeys=Extract <keyof LoginFormValuesType,string>
// LoginFormValuesType,string если строка то возьми ключи
// получил ключи email,password,rememberMe,captcha и выше вставил их в createField<LoginFormValuesTypeKeys>
// теперь если напишу другой ключ будет ошибка
const Login2: React.FC<MapStateToPropsType & MapDispatchPropsType> = (props) => {
  const aonSubmit = (formData: LoginFormValuesType) => {
    //75 урок 32:00 formData значение из reduxForm->handleSubmit
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
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
    return <Redirect to={'/profile'} />
  }
  return <div>
    <h1>LOGIN</h1>
    <LoginReduxForm onSubmit={aonSubmit} capchaUrl={props.capchaUrl} />
  </div>
};
const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  isAuth: state.auth.isAuth,
  capchaUrl: state.auth.capchaUrl
})
export default connect(mapStateToProps, { login })(Login2);
//login приходит из authReduser login с маленькой
