import { FieldValidatorType } from '../../../utils/validator/validators';
import React from "react";
import styles from "./FormControls.module.css";
import { Field, WrappedFieldMetaProps, WrappedFieldProps } from "redux-form";
// type FormControlParamtype={
//     meta:WrappedFieldMetaProps
//         }
export const textarea: React.FC<WrappedFieldProps> = ({ input, meta, ...props }) => {
    //это рестоператор.props содержит все кроме input и meta
    /* WrappedFieldProps взял внутри Field
     }*/
    const hasError = meta.touched && meta.error
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div> <textarea {...input} {...props} /> </div>
            {hasError && <span>{meta.error} </span>}
        </div>
 )
}
export const input: React.FC<WrappedFieldProps> = ({ input, meta, ...props }) => {
    //это рестоператор.props содержит все кроме input и meta
    const hasError = meta.touched && meta.error
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div> <input {...input} {...props} /> </div>
            {hasError && <span>{meta.error} </span>}
        </div>
 )
}
export function createField<FormKeysType extends string>(placeholder: string | undefined,
    // extends string чтобы  name не выдавала ошибку
    name: FormKeysType,
    validators: Array<FieldValidatorType>,
    component: React.FC<WrappedFieldProps>,
    props = {}, text = "") {
    return <div> <Field placeholder={placeholder}
        name={name}
        validate={validators}
        component={component}
        {...props} />{text}
    </div>
}