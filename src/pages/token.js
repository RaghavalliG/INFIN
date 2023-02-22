import React, { useState, useContext } from "react";
import { TextInput, Button } from '@mantine/core';
import { useForm } from '@mantine/form';
import { verifyToken } from "store/actions/professionalAdminAction";

import { useDispatch } from "react-redux";

export default function Token() {
    const dispatch = useDispatch(); //action dispathcher 

    const form = useForm({
        initialValues: { token: '' },   //initialize token 


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
                                       {/* submit functon */}
                            <form onSubmit={form.onSubmit((values) => dispatch(verifyToken(values)))}>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <TextInput placeholder="Enter Token" {...form.getInputProps('token')} />
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


