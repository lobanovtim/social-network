import { Field, reduxForm } from "redux-form";
import s from "../../Common/FormsControls/FormsControls.module.css";
import FormControl from "../../Common/FormsControls/FormsControls";

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button>save</button>
      </div>
      {error && <div className={s.formError}>{error}</div>}
      <div>
        <b>Full name</b>:{" "}
        {
          <Field
            className={s.form__input}
            placeholder={"Full name"}
            name={"fullName"}
            component={FormControl}
            elType={"input"}
          />
        }
      </div>
      <div>
        <b>Looking for a job</b>:{" "}
        {
          <Field
            className={s.form__input}
            placeholder={""}
            type={"checkbox"}
            name={"lookingForAJob"}
            component={FormControl}
            elType={"input"}
          />
        }
      </div>

      <div>
        <b>My professional skills</b>:
        {
          <Field
            className={s.form__input}
            placeholder={"My professional skills"}
            name={"lookingForAJobDescription"}
            component={FormControl}
            elType={"input"}
          />
        }
      </div>

      <div>
        <b>About me</b>:
        {
          <Field
            className={s.form__input}
            placeholder={"About me"}
            name={"aboutMe"}
            component={FormControl}
            elType={"input"}
          />
        }
      </div>
      <div>
        <b>Contacts</b>:{" "}
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div key={key}>
              <b>
                {key}:{" "}
                {
                  <Field
                    className={s.form__input}
                    placeholder={`${key}`}
                    name={`${key}`}
                    component={FormControl}
                    elType={"input"}
                  />
                }
              </b>
            </div>
          );
        })}
      </div>
    </form>
  );
};

const ProfileDataFormReduxForm = reduxForm({ form: "edit-profile" })(
  ProfileDataForm
);

export default ProfileDataFormReduxForm;
