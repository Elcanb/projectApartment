import React from 'react'
import * as Yup from 'yup'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'

import { login } from '../../../store/action/auth'

const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Email is invalid')
        .required('Email is required'),
    password: Yup.string().required('Password is required')
});

const Login = ({ login, isAuthenticated }) => {

    if (isAuthenticated) {
        return <Redirect to='/' />
    }

    return (
        <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            validationSchema={LoginSchema}
            onSubmit={(values, { setSubmitting }) => {
                login(values);
                setSubmitting(false);
            }}
        >
            {({ isSubmitting, isValid }) => (
                <div className="form-wrapper">
                    <div className="form">
                        <span className="form__title" >Login</span>
                        <Form>
                            <div className="input-wrapper">
                                <Field type='email' name='email' placeholder='Email' />
                                <ErrorMessage name='email' >{msg => <p className='error'>{msg}</p>}</ErrorMessage>
                            </div>
                            <div className="input-wrapper">
                                <Field type='password' name='password' placeholder='Password' />
                                <ErrorMessage name='password' >{msg => <p className='error'>{msg}</p>}</ErrorMessage>
                            </div>
                            <div className="button-wrapper">
                                <button disabled={!isValid} type='submit' className='form__btn'>Login</button>
                            </div>
                        </Form>
                    </div>
                </div>
            )}
        </Formik>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(Login)
