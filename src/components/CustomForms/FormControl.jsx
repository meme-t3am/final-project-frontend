/* eslint-disable react/prop-types */
import classnames from 'classnames';
import styles from './FormControl.css';

function FormControl({ label, children, required }) {
  const className = classnames(styles.FormControl, styles.LabelText);
  return (
    <label className={className}>
      <LabelText text={label} required={required} />
      {children}
    </label>
  );
}

export function LabelText({ text, required }) {
  const className = classnames(styles.LabelText, {
    [styles.Required]: required,
  });
  return <span className={className}>{text}</span>;
}

export function InputControl({ label, required, ...rest }) {
  return (
    <FormControl label={label} required={required} >
      <input {...rest} required={required}/>
    </FormControl>
  );
}

export function CheckboxControl({ legend, required, label, ...rest }) {
  return (
    <fieldset className={styles.CheckboxControl}>
      <legend >
        <LabelText text={legend} required={required}/>
      </legend>
      <label >
        <input type="checkbox" required={required} {...rest}/>
        {label}
      </label>
    </fieldset>
  );
}

export function SelectControl({ 
  label, 
  required, 
  placeholder, 
  children, 
  ...rest }) {
  return (
    <FormControl label={label} required={required}>
      <select {...rest} required={required}>
        {placeholder && <option disabled>{placeholder}</option>}
        {children}
      </select>
    </FormControl>
  );
}

export function FormButton({ children, ...rest }) {
  return (
    <button className={styles.FormButton} {...rest}>
      {children}
    </button>
  );
}
