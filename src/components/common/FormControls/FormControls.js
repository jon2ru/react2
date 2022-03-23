import React from "react";
import styles from "./FormControls.module.css";
import { Field } from "redux-form";

export const textarea = ({ input, meta, ...props }) => {
    //это рестоператор.props содержит все кроме input и meta
    /* let peremen="input"
     if(props.dialogPages){
      return peremen="textarea"
     }*/
    const hasError = meta.touched && meta.error
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div> <textarea {...input} {...props} /> </div>
            {hasError && <span>{meta.error} </span>}
        </div>

    )
}
export const input = ({ input, meta, ...props }) => {
    //это рестоператор.props содержит все кроме input и meta
    const hasError = meta.touched && meta.error
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div> <input {...input} {...props} /> </div>
            {hasError && <span>{meta.error} </span>}
        </div>

    )
}
export const createField = (placeholder, name, validators, component, 
    props = {}, text = "") => (
    <div> <Field placeholder={placeholder}
        name={name}
        validate={[validators]}
        component={component}
        {...props} />{ text }
    </div> 
)