import React, { useState, useContext } from "react";
import { TextInput, Button } from '@mantine/core';
import { useForm } from '@mantine/form';
import { forgetPassword } from "store/actions/professionalAdminAction";

import { useDispatch } from "react-redux";
import Image from "next/image";

export default function Email() {
    const dispatch = useDispatch();

    const form = useForm({
        initialValues: { email: '' },

        // functions will be used to validate values at corresponding key
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },

    });


    return (
        <div className="user-auth-pages">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 user-auth-left-card">
                        <div className="card">
                            <div className="brand"><a href=""><Image src="/logo.png" alt="" width={155} height={80} /></a></div>
                            <h1 className="card-title">All in one <span className="highlited">workspace</span></h1>
                            <p className="card-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                            <div className="card-image">
                                <Image src="/login-left-bg.png" alt="" className="card-img" width={895} height={683} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 user-rorm-card">
                        <div className="form-wrap">
                            <h2 className="card-title">Reset Password</h2>
                            <p>Confirm your email address and we’ll send the instructions.</p>

                            <form onSubmit={form.onSubmit((values) => dispatch(forgetPassword(values)))}>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <TextInput placeholder="Email" {...form.getInputProps('email')} />
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


