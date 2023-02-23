import { useForm } from "@mantine/form";
import { PasswordInput, TextInput, Button, Checkbox } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { handleLogin } from "store/actions/professionalAdminAction";
import Link from "next/link";
import Image from "next/image";

export default function Login() {
  const dispatch = useDispatch();
  const form = useForm({
    initialValues: { email: "", password: "" },

    // functions will be used to validate values at corresponding key
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <div className="user-auth-pages">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 user-auth-left-card">
            <div className="card">
              <div className="brand">
                <Link href="">
                  <Image src="/logo.png" alt="" width={155} height={80} />
                </Link>
              </div>
              <h1 className="card-title">All in one <span className="highlited">workspace</span></h1>
              <p className="card-text">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration.
              </p>
              <div className="card-image">
                <Image src="/login-left-bg.png" alt="" className="card-img" width={895} height={683} />
              </div>
            </div>
          </div>
          <div className="col-lg-6 user-rorm-card">
            <div className="form-wrap my-auto">
              <h2 className="card-title">Login</h2>
              {/* dispath the login action */}
              <form
                onSubmit={form.onSubmit((values) =>
                  dispatch(handleLogin(values))
                )}
              >
                <div className="row">
                  <div className="col-lg-12">
                    <TextInput
                      placeholder="Email"
                      {...form.getInputProps("email")}
                    />
                  </div>
                  <div className="col-lg-12">
                    {/* Password field */}
                    <PasswordInput
                      placeholder="Password"
                      withAsterisk
                      {...form.getInputProps("password")}
                    />
                  </div>
                </div>
                <div className="row pb-5">
                  <div className="col forget_check_link">
                    <Checkbox label="Remember me" />

                    {/* redirect to forgrt password page  */}
                    <Link href="/forget-password">Forget password?</Link>
                  </div>
                </div>
                <div className="row actions mt-5">
                  <div className="col ">
                    <Button type="submit" className="mb-3 submit-btn">
                      Submit
                    </Button>
                    <p>
                      Don’t have an account? <Link href="register">Register</Link>
                    </p>
                    
                  </div>
                </div>
              </form>
            </div>
            <div className="mt-auto card-text"><p><Link href="/">Privacy Policy</Link> and <Link href="/">Terms of Service</Link></p></div>
          </div>
        </div>
      </div>
    </div>
  );
}
