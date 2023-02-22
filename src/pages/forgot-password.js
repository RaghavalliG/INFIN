import { Button, Checkbox, PasswordInput, TextInput } from "@mantine/core";
import { useForm } from '@mantine/form';
import Image from "next/image";
export default function Password() {
    const form = useForm({

        //initial values 
        initialValues: {
          email: '',
          password: '',
        },
      
        //validate email 
        validate: {
          email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
      });
    return <div className="user-auth-pages">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6 user-auth-left-card">
                    <div className="card">
                        <div className="brand"><a href=""><Image src="/logo.png" alt="" /></a></div>
                        <h1 className="card-title">All in one workspace</h1>
                        <p className="card-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                        <div className="card-image">
                            <Image src="login-left-bg.png" alt="" className="card-img" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 user-rorm-card">
                    <div className="form-wrap">
                    <h2 className="card-title">Reset Password</h2>
                    <p>Confirm your email address and we’ll send the instructions.</p>
                    
                     {/* onsubmit function */}
                    <form onSubmit={form.onSubmit((values) => console.log(values))}>
                        <div className="row">
                            <div className="col-lg-12">
                                {/* email field */}
                            <TextInput
                                withAsterisk
                                placeholder="Email ID"
                                {...form.getInputProps('email')}
                                />

                            </div>
                           
                        </div>
  
                        <div className="row actions mt-5">
                            <div className="col">
                            <Button className="mb-3 submit-btn">
                            Reset Password
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
    </div>
}