import { Field, Form, Formik } from "formik";
import React from "react";
import { filterType } from "../../Redux/usersReduser";

const usersSearchFormValidate = (values: any) => {
    const errors = {};
    return errors;
  } 
  //выше валидатор
  type PropsType={
    onFilterChanged:(filter:filterType)=>void
  }
 export const UserSearchForm:React.FC<PropsType> =React.memo((props) => {
    const submit=(values:filterType, { setSubmitting }:{ setSubmitting:(isSubmitting:boolean )=>void})=>{
        props.onFilterChanged(values)
        setSubmitting(false);
      setTimeout(() => {
  
        alert(JSON.stringify(values, null, 2));
  
        setSubmitting(false);
  
      }, 400);
    }
  
    return <div>
      <Formik
  
        initialValues={{ term: ''}}
  
        validate={usersSearchFormValidate}
        onSubmit={submit}
         >
  
        {({ isSubmitting }) => (
  
          <Form>
  
            <Field type="text" name="term" />
  
            <button type="submit" disabled={isSubmitting}>
  
              Fiend
  
            </button>
  
          </Form>
  
        )}
  
      </Formik>
  
    </div>
  })
  export default UserSearchForm;