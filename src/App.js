import React from "react";
import "./index.css";
import { useFormik } from "formik";
// TODO: import useFormik from formik library

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      emailField: "",
      pswField: "",
    },
    onSubmit: (values, errors) => {
      console.log("form:", values);
      // console.log(errors[emailField])
      // console.log(errors[pswField])
      if (!(errors[emailField] && errors.pswField)) {
        alert("Login Sucessful");
      }
    },
    validate: (values) => {
      let errors = {};
      if (!values.emailField) {
        errors.emailField = "Field Required";
      } else {
        if (
          !/^[a-zA-Z0-9_-]+@(?:[a-zA-Z0-9_-]+\.)+[a-zA-Z]{2,}$/i.test(
            values.emailField
          )
        ) {
          errors.emailField = "Username should be an emailField";
        }
      };
      if (!values.pswField) {
        errors.pswField = "Field Required";
      }
      return errors;
    },
  });
  return (
    <div>
      <p>The app is ready! You can proceed with the task instructions.</p>
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input
          type="text"
          id="emailField"
          value={formik.values.emailField}
          onChange={formik.handleChange}
        />
        {formik.errors.emailField ? (
          <div id="emailFieldError" style={{ color: "red" }}>
            {formik.errors.emailField}
          </div>
        ) : null}
        <div>Password</div>
        <input
          type="text"
          id="pswField"
          value={formik.values.pswField}
          onChange={formik.handleChange}
        />
        {formik.errors.pswField ? (
          <div id="pswError" style={{ color: "red" }}>
            {formik.errors.pswField}
          </div>
        ) : <br />}
        <button type="submit" id="submitBtn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
