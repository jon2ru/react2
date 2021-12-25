import React from "react";
import styles from "./FormControls.module.css";

export const Textarea = ({input,meta, ...props}) => {
    //это рестоператор.props содержит все кроме input и meta
    return (
        <div className={styles.formControl + " " + styles.error}>
            <textarea {...input} {...props} />
        </div>

    )
}