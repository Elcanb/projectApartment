import React from 'react'
import * as Yup from 'yup'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'

import '../Login/login.scss'
import { register } from '../../../store/action/auth'

const RegistrationSchema = Yup.object().shape({
    name: Yup.string().required('Your name is required')
        .min(3, 'Too short')
        .max(25, 'Too long'),
    surname: Yup.string().required('Your surname is required')
        .min(3, 'Too short')
        .max(25, 'Too long'),
    email: Yup.string().email('Email is invalid')
        .required('Email is required'),
    password: Yup.string().required('Password is required')
        .min(6, 'Password is too short'),
    passwordConfirm: Yup.string()
        .oneOf([Yup.ref('password'), null], `Password doesn't match`)
        .required('You need to confirm your password.')
})

const Registration = ({ register, isAuthenticated }) => {
    if (isAuthenticated) {
        return <Redirect to='/' />
    }
    return (
        <Formik
            initialValues={{
                name: '',
                surname: '',
                email: '',
                password: '',
                passwordConfirm: ''
            }}
            validationSchema={RegistrationSchema}
            onSubmit={(values, { setSubmitting }) => {
                register(values);
                setSubmitting(false);
            }}
        >
            {({ isSubmitting, isValid }) => (
                <div className="form-wrapper">
                    <div className="form">
                        <span className="form__title" > Register </span>
                        <Form>
                            <div className="input-wrapper">
                                <Field type='text' name='name' placeholder='Name' />
                                <ErrorMessage name='name'>{msg => <p className='error'>{msg}</p>}</ErrorMessage>
                            </div>
                            <div className="input-wrapper">
                                <Field type='text' name='surname' placeholder='Surname' />
                                <ErrorMessage name='surname'>{msg => <p className='error'>{msg}</p>}</ErrorMessage>
                            </div>
                            <div className="input-wrapper">
                                <Field type='email' name='email' placeholder='Email' />
                                <ErrorMessage name='email'>{msg => <p className='error'>{msg}</p>}</ErrorMessage>
                            </div>
                            <div className="input-wrapper">
                                <Field type='password' name='password' placeholder='Password' />
                                <ErrorMessage name='password'>{msg => <p className='error'>{msg}</p>}</ErrorMessage>
                            </div>
                            <div className="input-wrapper">
                                <Field type='password' name='passwordConfirm' placeholder='Password Confirmation' />
                                <ErrorMessage name='passwordConfirm'>{msg => <p className='error'>{msg}</p>}</ErrorMessage>
                            </div>
                            <div className="button-wrapper">
                                <button disabled={!isValid} type='submit' className='form__btn'>Register</button>
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

export default connect(mapStateToProps, { register })(Registration)
