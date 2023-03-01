import { Button, NativeSelect, TextInput } from "@mantine/core";
import { Dropzone } from "@mantine/dropzone";
import { useRef } from "react";
import { isNotEmpty, useForm } from "@mantine/form";
import { useEffect, useState } from "react";
import { updateProfessionalManager, professionalManagerDetails, addProfessionalManager } from "store/actions/professionalAdminAction";
import { useDispatch, useSelector } from "react-redux";


export default function CreateManager(props) {
    console.log(props);
    let [documents,setDocuments] = useState([])
    // const [managerId,setmanagerId] = useState(props.managerId);
    const dispatch = useDispatch();
    const managerId = props.managerId;
    useEffect(()=>{
        if (managerId) {
            console.log(managerId)
        dispatch(professionalManagerDetails({managerId:managerId}));
        }
    },[managerId, dispatch])
    const professional_manager_list = useSelector((state) => state.professionalManagerData.professionalManagerData)
    console.log(professional_manager_list);

    //set single user value to input field
  useEffect(() => {
    form.setValues((prev) => ({
      ...prev,
      ...professional_manager_list,
    }));
  }, [professional_manager_list]);

    const form = useForm({
        //Set the Initial Values
        initialValues: {
            email: "",
            firstName: "",
            lastName: "",
            mobile: "",
            location: "",
            files: "",
            documents:"",
        },

        // functions will be used to validate values at corresponding key
        validate: {
            firstName: (value) => (value == "" ? "First name is required" : null),
            lastName: (value) => (value == "" ? "Last name is required" : null),
            // lname: (value) => (value.length == null ? "Last Name is required" : null),
            email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
            mobile: (value) =>
                /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(value)
                    ? null
                    : "Please Check your number",
            // files:isNotEmpty('This field cannot be empty')
        },
    });

    //to access a DOM element directly
    const openRef = useRef(null);
    return <div className="card admin-card-wedget">
        <form
            onSubmit={form.onSubmit((values) => {
                values.documents = documents;
                console.log(
                    values,managerId
                );
                if(managerId && isNotEmpty(managerId)){
                    dispatch(updateProfessionalManager(values));
                }else{
                    dispatch(addProfessionalManager(values));
                }
                

            })}
        >
            <div className="card-body p-0">
                <div className="row side-gap-0">
                    <div className="col-lg-6">
                        <TextInput
                            placeholder="First name"
                            {...form.getInputProps("firstName")}
                        />
                    </div>
                    <div className="col-lg-6">
                        <TextInput
                            placeholder="Last name"
                            {...form.getInputProps("lastName")}
                        />
                    </div>
                    <div className="col-lg-12">
                        <TextInput
                            placeholder="Email address"
                            {...form.getInputProps("email")}
                        />
                    </div>
                    <div className="col-lg-12">
                        <TextInput
                            placeholder="Contact number"
                            {...form.getInputProps("mobile")}
                        />
                    </div>
                    <div className="col-lg-12">
                        <TextInput
                            placeholder="Location"
                            {...form.getInputProps("location")}
                        />
                    </div>

                    <div className="col-lg-12">
                        <Dropzone
                            openRef={openRef}
                            {...form.getInputProps("files")}
                            onDrop={(files) => {
                                // e.preventDefault()
                                console.log('accepted files', files)
                                files.map((item, index) => {
                                    documents.push(item);
                                });
                            }}
                            activateOnClick={false} className="file-select-input"
                            styles={{ inner: { pointerEvents: 'all' } }}
                        >

                            <button onClick={(e) => {
                                e.preventDefault();
                                openRef.current()
                                }} 
                                className="file-load-btn"><span className="icon"><svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M16.9669 -7.60645e-08C17.9279 -3.40552e-08 18.707 0.779091 18.707 1.74015L18.707 32.1927C18.707 33.1538 17.9279 33.9329 16.9669 33.9329C16.0058 33.9329 15.2267 33.1538 15.2267 32.1927L15.2267 1.74015C15.2267 0.779091 16.0058 -1.18074e-07 16.9669 -7.60645e-08Z" fill="#47B6F4" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M0 17.8368C0 16.8758 0.779091 16.0967 1.74015 16.0967L32.1927 16.0967C33.1538 16.0967 33.9329 16.8758 33.9329 17.8368C33.9329 18.7979 33.1538 19.577 32.1927 19.577L1.74015 19.577C0.779091 19.577 0 18.7979 0 17.8368Z" fill="#47B6F4" />
                            </svg>
                            </span>Upload documents/ID</button>

                        </Dropzone>
                    </div>
                    <div className="col-lg-12">
                        <NativeSelect
                            data={['Assign client/Task', 'submenu 1', 'submenu 2', 'submenu 3']}
                            withAsterisk
                        />
                    </div>
                    <div className="col-lg-12 actions place-center mt-5">
                        <Button type="submit">
                        { (managerId && isNotEmpty(managerId)) ? 'Edit Professional Manager':
                            'Add Professional Manager' }
                        </Button>
                    </div>

                </div>
            </div>
        </form>
    </div>
}