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
                    <h2 className="card-title">Login</h2>
                    <form onSubmit={form.onSubmit((values) => console.log(values))}>
                        <div className="row">
                            <div className="col-lg-12">
                            <TextInput
                                withAsterisk
                                label="Email"
                                placeholder="Email ID"
                                {...form.getInputProps('email')}
                                />

                            </div>
                            <div className="col-lg-12">
                            <PasswordInput
                            placeholder="Password"
                            label="Password"
                            withAsterisk
                            {...form.getInputProps('password')}
                            />

                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <Checkbox
      label="Remember me"
    />
    <a href="">Forget password?</a>
    </div>
                        </div>
                        <div className="row actions">
                            <div className="col">
                            <Button>
      Submit
    </Button>
    <p>Don’t have an account? <a href="">Register</a></p>
    <p>Privacy Policy and Terms of Service</p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
}