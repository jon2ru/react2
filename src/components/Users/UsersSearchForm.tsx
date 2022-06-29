import { Field, Form, Formik } from "formik";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { getUserFilter } from "../../Redux/users-selectors";
import { filterType } from "../../Redux/usersReduser";

const usersSearchFormValidate = (values: any) => {
    const errors = {};
    return errors;
}
//выше валидатор
type formType = {
    term: string,
    friend: string
}
type PropsType = {
    onFilterChanged: (filter: filterType) => void
}
const UserSearchForm: FC<PropsType> = (props) => {
    const filter = useSelector(getUserFilter)
    const submit = (values: formType, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
        const filter: filterType = {
            term: values.term,//кого ищу имя
            friend: values.friend === 'null' ? null : values.friend === 'true' ? true : false//selector follow or not
        }
        props.onFilterChanged(filter)
        setSubmitting(false);
    }

    return <div>
        <Formik
            enableReinitialize
            initialValues={{ term:filter.term, friend:String(filter.friend) }}

            validate={usersSearchFormValidate}

            onSubmit={submit}
        >

            {({ isSubmitting }) => (

                <Form>

                    <Field type="text" name="term" />
                    <Field name="friend" as="select">

                        <option value="null">All</option>

                        <option value="true">Only followed</option>

                        <option value="false">Only unfollowed</option>

                    </Field>
                    <button type="submit" disabled={isSubmitting}>

                        Fiend

                    </button>

                </Form>

            )}

        </Formik>

    </div>
}
export default UserSearchForm;