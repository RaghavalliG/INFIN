import { Button, Checkbox, PasswordInput, TextInput } from "@mantine/core";
import { useForm } from '@mantine/form';
export default function Login() {
    const form = useForm({
        initialValues: {
          email: '',
          password: '',
        },
    
        validate: {
          email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
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
                            <img src="login-left-bg.png" alt="" className="card-img" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 user-rorm-card">
                    <h2 className="card-title">Registration</h2>
                    <form onSubmit={form.onSubmit((values) => console.log(values))}>
                        <div className="row">
                            <div className="col-lg-6">
                                <TextInput
                                withAsterisk
                                label="First name"
                                placeholder="First name"
                                {...form.getInputProps('first_name')}
                                />

                            </div>
                            <div className="col-lg-6">
                            <TextInput
                                withAsterisk
                                label="Last name"
                                placeholder="Last name"
                                {...form.getInputProps('last_name')}
                                />

                            </div>
                            <div className="col-lg-12">
                            <TextInput
                                withAsterisk
                                label="First name"
                                placeholder="First name"
                                {...form.getInputProps('first_name')}
                                />
                            </div>
                            <div className="col-lg-12">
                            <TextInput
                                withAsterisk
                                label="First name"
                                placeholder="First name"
                                {...form.getInputProps('first_name')}
                                />
                            </div>
                            <div className="col-lg-12">
                            <TextInput
                                withAsterisk
                                label="First name"
                                placeholder="First name"
                                {...form.getInputProps('first_name')}
                                />
                            </div>
                            <div className="col-lg-12">
                            <TextInput
                                withAsterisk
                                label="First name"
                                placeholder="First name"
                                {...form.getInputProps('first_name')}
                                />
                            </div>
                            <div className="col-lg-12">
                            <TextInput
                                withAsterisk
                                label="First name"
                                placeholder="First name"
                                {...form.getInputProps('first_name')}
                                />
                            </div>
                        </div>
  
                        <div className="row actions">
                            <div className="col">
                            <Button>
                            Register
    </Button>
    <p>Already have an account?  <a href="">Login</a></p>
    <p>Privacy Policy and Terms of Service</p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
}