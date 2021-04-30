import { Field, reduxForm } from "redux-form";
import { requireField } from "../../utils/validators/validators";
import { FormControl } from "../Common/FormsControls/FormsControls";
import s from "./Login.module.css";

const LoginForm = (props) => {
  return (
    <form className={s.form} onSubmit={props.handleSubmit}>
      <Field
        className={s.form__input}
        placeholder={"Login"}
        name={"login"}
        component={FormControl}
        validate={[requireField]}
        elType={"input"}
      />
      <Field
        className={s.form__input}
        placeholder={"Password"}
        name={"password"}
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
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <div>
      <h1 className={s.loginPage}>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
