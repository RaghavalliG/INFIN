import React, { useState, useContext } from "react";
import { TextInput, Button } from '@mantine/core';
import { useForm } from '@mantine/form';

import { useDispatch } from "react-redux";

export default function Email(){

const form = useForm({
    initialValues: { email: '', password: '' },

    // functions will be used to validate values at corresponding key
    validate: {
        email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },

});


return (


    <form onSubmit={form.onSubmit((values) => dispatch(handleLogin(values)))}>
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

)

}


