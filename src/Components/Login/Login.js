import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { requireField } from "../../utils/validators/validators";
import { FormControl } from "../Common/FormsControls/FormsControls";
import { login } from "../../redux/auth-reducer";
import s from "./Login.module.css";
import style from "./../Common/FormsControls/FormsControls.module.css";
import { Redirect } from "react-router";

const LoginForm = (props) => {
  return (
    <form className={s.form} onSubmit={props.handleSubmit}>
      <Field
        className={s.form__input}
        placeholder={"email"}
        name={"email"}
        component={FormControl}
        validate={[requireField]}
        elType={"input"}
      />
      <Field
        className={s.form__input}
        placeholder={"Password"}
        name={"password"}
        type={"password"}
        component={FormControl}
        validate={[requireField]}
        elType={"input"}
      />
      <Field
        className={s.form__checkbox}
        type={"checkbox"}
        name={"rememberMe"}
        component={FormControl}
        elType={"input"}
      />
      remember me
      <button className={s.form__button}>Log in</button>
      {props.error && <p className={style.formError}>{props.error}</p>}
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };
  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }
  return (
    <div>
      <h1 className={s.loginPage}>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
