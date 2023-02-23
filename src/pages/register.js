import { Button, Checkbox, PasswordInput, TextInput } from "@mantine/core";
import { useForm } from '@mantine/form';
import { handleSignup } from "store/actions/professionalAdminAction";
import { useDispatch, useSelector } from 'react-redux';
import Image from "next/image";
import Link from "next/link";

export default function Register() {
    // const dispatch = useDispatch();
    const dispatch = useDispatch();  //action dispatcher
    const form = useForm({

        // initial values
        initialValues: {
            first_name: '',
            last_name: '',
            contact_number: '',
            membership_number: '',
            contact_address: '',
            email: '',
            password: '',
            confirmPassword: ''
        },


        //validate input field
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            confirmPassword: (value, values) => value !== values.password ? 'Passwords did not match' : null,
        },
    });
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
                        <form onSubmit={form.onSubmit((values) => dispatch(handleSignup(values)))}>
                            <div className="row">
                                <div className="col-lg-6">

                                    {/* first name */}
                                    <TextInput
                                        withAsterisk

                                        placeholder="First name"
                                        {...form.getInputProps('first_name')}
                                    />

                                </div>
                                {/* last_name */}
                                <div className="col-lg-6">
                                    <TextInput
                                        withAsterisk

                                        placeholder="Last name"
                                        {...form.getInputProps('last_name')}
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
                                    <TextInput placeholder="Email" {...form.getInputProps('email')} />
                                </div>
                                <div className="col-lg-12">
                                {/* Membership number */}
                                    <TextInput
                                        withAsterisk

                                        placeholder="Membership number"
                                        {...form.getInputProps('membership_number')}
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