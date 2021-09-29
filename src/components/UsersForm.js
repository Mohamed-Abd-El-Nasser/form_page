import React from "react";
import {Formik,Field,ErrorMessage,Form} from "formik";
import * as Yup from "yup";

function UsersForm (props){


    const schema = Yup.object().shape({
            name: Yup.string()
                   .required("name is requird")
                   .min(2,"too small")
                   .max(50,"too muche"),
            email:Yup.string()
                    .required("email is required")
    }) 

    return(
        <div>


        <Formik  initialValues={props.values} validationSchema={schema} onSubmit={props.onSubmit}>

            <Form>
                <label>name: </label>
                <Field name="name"/>
                <ErrorMessage name="name"/>
                <label>email: </label>
                <Field name="email"/>
                <ErrorMessage name="email"/>

                <button type="submit">send</button>



            </Form>

        </Formik>



        </div>
    )

}
export default UsersForm;