import { Button, Checkbox, PasswordInput, TextInput } from "@mantine/core";
import { useForm } from '@mantine/form';
import { handleSignup, handleClientSignup,detailsWithEmail } from "store/actions/professionalAdminAction";
import { useDispatch, useSelector } from 'react-redux';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Register() {
    // const dispatch = useDispatch();
    const dispatch = useDispatch();  //action dispatcher
    const router = useRouter()  //defining next route 
    console.log(router.query.email);
    const route_email = router.query.email;

    useEffect(() => {
        route_email?
        dispatch(detailsWithEmail(route_email)):''
    }, [route_email]);

    const user_details = useSelector(state => state.userMailData.userMailData)
    console.log(user_details)

    const form = useForm({

        // initial values
        initialValues: {
            firstName: '',
            lastName: '',
            contact_number: '',
            membership_number: '',
            contact_address: '',
            email: '',
            password: '',
            confirmPassword: '',
            // role: ''
        },


        //validate input field
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            confirmPassword: (value, values) => value !== values.password ? 'Passwords did not match' : null,
        },
    });
    useEffect(() => {
        // form.setValues((prev) => ({ ...prev, ...professionalAdmin_data}));
        form.setFieldValue('email', route_email);
        // form.setFieldValue('role', 7);
        // form.setFieldValue('lname', lname);
    }, [route_email])
    return <div className="user-auth-pages">
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
                    <div className="form-wrap my-auto">
                        <h2 className="card-title">Registration</h2>

                        {/* onsubmit function */}
                        <form onSubmit={form.onSubmit((values) => {
                            if (route_email) {
                                values.role = 7
                                dispatch(handleClientSignup(values))
                            } else {
                                values.role = 4
                                dispatch(handleSignup(values))
                            }

                        }
                        )}>
                            <div className="row">
                                <div className="col-lg-6">

                                    {/* first name */}
                                    <TextInput
                                        withAsterisk

                                        placeholder="First name"
                                        {...form.getInputProps('firstName')}
                                    />

                                </div>
                                {/* last_name */}
                                <div className="col-lg-6">
                                    <TextInput
                                        withAsterisk

                                        placeholder="Last name"
                                        {...form.getInputProps('lastName')}
                                    />

                                </div>
                                <div className="col-lg-12">
                                    {/* contact_number */}
                                    <TextInput
                                        withAsterisk

                                        placeholder="Contact number"
                                        {...form.getInputProps('contact_number')}
                                    />
                                </div>
                                {/* Email */}
                                <div className="col-lg-12">
                                    <TextInput placeholder="Email"
                                        {...form.getInputProps('email')}
                                        readOnly={route_email ? "readonly" : ''}
                                    // 
                                    />
                                </div>

                                {/* Create password */}
                                <div className="col-lg-12">
                                    <PasswordInput
                                        placeholder="Create password"
                                        withAsterisk
                                        {...form.getInputProps('password')}
                                    />
                                </div>
                                {/* Confrm password */}
                                <div className="col-lg-12">
                                    <PasswordInput
                                        placeholder="Confrm password"
                                        withAsterisk
                                        {...form.getInputProps('confirmPassword')}
                                    />
                                </div>
                                {/* Contact Address */}
                                <div className="col-lg-12">
                                    <TextInput
                                        withAsterisk

                                        placeholder="Contact Address"
                                        {...form.getInputProps('contact_address')}
                                    />
                                </div>
                                {(route_email) ?
                                    <div className="client-Admin-detail">
                                        <div className="col-lg-12">
                                            {/* Membership number */}
                                            <TextInput
                                                withAsterisk
                                                placeholder="Company Name"
                                                {...form.getInputProps('companyName')}
                                            />
                                        </div>
                                        <div className="col-lg-12">
                                            {/* Membership number */}
                                            <TextInput
                                                withAsterisk
                                                placeholder="PAN Number"
                                                {...form.getInputProps('panNumber')}
                                            />
                                        </div>
                                        <div className="col-lg-12">
                                            {/* Membership number */}
                                            <TextInput
                                                withAsterisk
                                                placeholder="GST Number"
                                                {...form.getInputProps('gstNumber')}
                                            />
                                        </div>
                                        <div className="col-lg-12">
                                            {/* Membership number */}
                                            <TextInput
                                                withAsterisk
                                                placeholder="Business Type"
                                                {...form.getInputProps('businessType')}
                                            />
                                        </div>

                                    </div>
                                    :
                                    <div className="professional-Admin-detail">
                                        <div className="col-lg-12">
                                            {/* Membership number */}
                                            <TextInput
                                                withAsterisk

                                                placeholder="Membership number"
                                                {...form.getInputProps('membership_number')}
                                            />
                                        </div>

                                    </div>
                                }
                            </div>






                            <div className="row actions mt-5">
                                <div className="col">
                                    <Button type="submit" className="submit-btn mb-3">
                                        Register
                                    </Button>
                                    <p>Already have an account?  <a href="login">Login</a></p>

                                </div>
                            </div>
                        </form>

                    </div>
                    <div className="mt-auto card-text"><p><Link href="/">Privacy Policy</Link> and <Link href="/">Terms of Service</Link></p></div>
                </div>
            </div>
        </div>
    </div>
}