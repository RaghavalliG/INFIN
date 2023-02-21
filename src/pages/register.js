import { Button, Checkbox, PasswordInput, TextInput } from "@mantine/core";
import { useForm } from '@mantine/form';
import { handleSignup } from "store/actions/professionalAdminAction";
import { useDispatch, useSelector } from 'react-redux';

export default function Register() {
    // const dispatch = useDispatch();
    const dispatch = useDispatch();
    const form = useForm({
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
                        <div className="brand"><a href=""><img src="/logo.png" alt="" /></a></div>
                        <h1 className="card-title">All in one workspace</h1>
                        <p className="card-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                        <div className="card-image">
                            <img src="../login-left-bg.png" alt="" className="card-img" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 user-rorm-card">
                    <div className="form-wrap">
                        <h2 className="card-title">Registration</h2>
                        <form onSubmit={form.onSubmit((values) => dispatch(handleSignup(values)))}>
                            <div className="row">
                                <div className="col-lg-6">
                                    <TextInput
                                        withAsterisk

                                        placeholder="First name"
                                        {...form.getInputProps('first_name')}
                                    />

                                </div>
                                <div className="col-lg-6">
                                    <TextInput
                                        withAsterisk

                                        placeholder="Last name"
                                        {...form.getInputProps('last_name')}
                                    />

                                </div>
                                <div className="col-lg-12">
                                    <TextInput
                                        withAsterisk

                                        placeholder="Contact number"
                                        {...form.getInputProps('contact_number')}
                                    />
                                </div>
                                <div className="col-lg-12">
                                    <TextInput placeholder="Email" {...form.getInputProps('email')} />
                                </div>
                                <div className="col-lg-12">
                                    <TextInput
                                        withAsterisk

                                        placeholder="Membership number"
                                        {...form.getInputProps('membership_number')}
                                    />
                                </div>
                                <div className="col-lg-12">
                                    <TextInput
                                        withAsterisk

                                        placeholder="Contact Address"
                                        {...form.getInputProps('contact_address')}
                                    />
                                </div>
                                <div className="col-lg-12">
                                    <PasswordInput
                                        placeholder="Create password"
                                        withAsterisk
                                        {...form.getInputProps('password')}
                                    />
                                </div>
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
                                    <p>Privacy Policy and Terms of Service</p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
}