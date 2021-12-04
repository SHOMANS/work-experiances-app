import { Field } from "formik";

function Input({
  type,
  name,
  placeholder,
  errors,
  touched,
  label,
  disabled,
  checkBoxLabel,
  component = "input",
}) {
  return (
    <div className="formField">
      <Field
        type={type}
        name={name}
        placeholder={placeholder}
        autoComplete={"off"}
        component={component}
        disabled={disabled}
        id={name}
      />
      {placeholder && (
        <label className="fieldLabel" htmlFor={name}>
          {placeholder}
        </label>
      )}
      {label && (
        <label className="label" htmlFor={name}>
          {label}
        </label>
      )}
      {checkBoxLabel && <label htmlFor={name}>{checkBoxLabel}</label>}
      {errors[name] && touched[name] && (
        <div className="inputError">{errors[name]}</div>
      )}
    </div>
  );
}

export default Input;
