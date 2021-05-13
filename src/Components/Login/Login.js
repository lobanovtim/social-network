import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { requireField } from "../../utils/validators/validators";
import { FormControl } from "../Common/FormsControls/FormsControls";
import { login } from "../../redux/auth-reducer";
import s from "./Login.module.css";
import style from "./../Common/FormsControls/FormsControls.module.css";
import { Redirect } from "react-router";

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form className={s.form} onSubmit={handleSubmit}>
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
      {captchaUrl && <img src={captchaUrl} alt={"captca"} />}
      {captchaUrl && (
        <Field
          className={s.form__input}
          placeholder={"Symbols from image"}
          name={"captcha"}
          component={FormControl}
          validate={[requireField]}
          elType={"input"}
        />
      )}
      {error && <p className={style.formError}>{error}</p>}
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  };
  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }
  return (
    <div>
      <h1 className={s.loginPage}>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
