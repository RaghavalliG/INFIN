import AdminFooter from "@/components/common/admin-footer";
import AdminHeader from "@/components/common/admin-header";
import { isNotEmpty, useForm } from '@mantine/form';
import { Button, NativeSelect, TextInput } from "@mantine/core";
import { inviteClient } from "store/actions/professionalAdminAction";
import { useDispatch } from "react-redux";


import SideMenu from "@/components/sideMenu";


export default function InviteClient() {
    const dispatch = useDispatch()
    const form = useForm({
        //Set the Initial Values
        initialValues: {
            email: '',
        },

        // functions will be used to validate values at corresponding key
        validate: {
          email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
        },

    });

    return <>
        <div className="admin_root_wrap">
            <div className='admin_wrap container-fluid'>
                <SideMenu />
                <div className="admin-content-area">
                    <AdminHeader />
                    <div className="dashboard-widget-wrap">
                        <div className="card admin-card-wedget">
                            <form onSubmit={form.onSubmit((values) => {
                                console.log(values);
                                dispatch(inviteClient(values))
                            })}>
                                <div className="card-body p-0">
                                    <div className="row side-gap-0">
                                        <div className="col-lg-6">
                                            <TextInput
                                                placeholder="Email address"
                                                {...form.getInputProps('email')}

                                            />
                                        </div>
                                        <div className="col-lg-12 actions place-center mt-5">
                                        <Button type="submit">
                                            Send Invite
                                        </Button>
                                    </div>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
               
            </div>
            <AdminFooter />
        </div>
    </>
}