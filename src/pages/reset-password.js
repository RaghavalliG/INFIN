import React, { useState, useContext } from "react";
import { TextInput, Button, PasswordInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { resetPassword } from "store/actions/professionalAdminAction";
import { useRouter } from 'next/router'

import { useDispatch } from "react-redux";

export default function Reset() {
    const dispatch = useDispatch(); //action dispatcher 
    const router = useRouter()  //defining next route 
  console.log(router.query.token);
  const pwd_token = router.query.token;
    

    const form = useForm({
        initialValues: { token: '', password: '',confirmPassword: '' }, // initialize values
         
        //validation of confirmpassword
        validate: {
            confirmPassword: (value, values) => value !== values.password ? 'Passwords did not match' : null,
        },

    });


    return (
        <div className="user-auth-pages">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 user-auth-left-card">
                        <div className="card">
                            <div className="brand"><a href=""><img src="/logo.png" alt="" /></a></div>
                            <h1 className="card-title">All in one workspace</h1>
                            <p className="card-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                            <div className="card-image">
                                <img src="/login-left-bg.png" alt="" className="card-img" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 user-rorm-card">
                        <div className="form-wrap">
                            <h2 className="card-title">Reset Password</h2>
                            <p>Confirm your email address and we’ll send the instructions.</p>

                            <form onSubmit={form.onSubmit((values) => {values.token = pwd_token; dispatch(resetPassword(values))})}>
                                <div className="row">
                                    {/* <div className="col-lg-12">
                                        <TextInput placeholder="Enter token" {...form.getInputProps('token')} />
                                    </div> */}
                                    <div className="col-lg-12">

                                        {/* new password */}
                                        <PasswordInput 
                                        placeholder="Enter new password" 
                                        withAsterisk 
                                        {...form.getInputProps('password')} />
                                    </div>
                                    <div className="col-lg-12">
                                        {/* confirm password */}
                                    <PasswordInput
                                        placeholder="Confrm password"
                                        withAsterisk
                                        {...form.getInputProps('confirmPassword')}
                                    />
                                </div>

                                </div>
                                <div className="row actions mt-5">
                                    <div className="col ">
                                        <Button type="submit" className="mb-3 submit-btn">
                                            Submit
                                        </Button>

                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}


