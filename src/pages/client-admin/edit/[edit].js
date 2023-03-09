import AdminHeader from "@/components/common/admin-header";
import Footer from "@/components/common/footer";
import SideMenu from "@/components/sideMenu";
import { Button, NativeSelect, TextInput } from "@mantine/core";
import { Dropzone, IMAGE_MIME_TYPE, FileWithPath } from "@mantine/dropzone";
import { useRef, useState } from "react";
import { useEffect } from "react";
import { isNotEmpty, useForm } from "@mantine/form";
import { Text, Image, SimpleGrid } from "@mantine/core";

import { useDispatch, useSelector } from "react-redux";
import {
  adminclientProfileDetails,
  professionalAdminProfileDetails,
  updateClientAdmin,
} from "store/actions/professionalAdminAction";
import { updateProfessionalAdmin } from "store/actions/professionalAdminAction";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

export default function ClientAdminEdit() {
  const dispatch = useDispatch();
  const router = useRouter();
  const clientid = router.query.edit; //create dynamic id
  console.log(clientid);

  const [image, setImage] = useState([]); //store files

  // const [files, setFiles] = useState([]);

  // const previews = files.map((file, index) => {
  //   const imageUrl = URL.createObjectURL(file);
  //   return (
  //     <Image
  //       key={index}
  //       src={imageUrl}
  //       imageProps={{ onLoad: () => URL.revokeObjectURL(imageUrl) }}
  //     />
  //   );
  // })

  useEffect(() => {
    if (clientid && clientid != "") {
      dispatch(adminclientProfileDetails({ clientid: clientid }));
    }
  }, [clientid, dispatch]);

  const adminClientData = useSelector(
    //access data from store
    (state) => state.adminClientData.adminClientData
  );
  console.log(adminClientData, "adminClient Data +++++++@@@@@");

  //split the full name to first name and last name not require as response is firstname and Lastname
  // if (adminClientData?.name !== "") {
  //   let fullname = adminClientData.name;

  //   var split = fullname?.indexOf(" ");
  // var firstName = 'john';
  // var lastName = 'doe';
  // }

  //set single user value to input field
  useEffect(() => {
    form.setValues((prev) => ({
      ...prev,
      ...adminClientData,

      image,
    }));
  }, [adminClientData]);

  const form = useForm({
    //Set the Initial Values
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      mobile: "",
      membershipNumber: "",
      // contactAddress: "",
      communicationAddress: "",
      // designation: "",
      businessType: "",
      gstNumber: "",
      panNumber: "",
      companyName: "",
      files: "",
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

      communicationAddress: isNotEmpty("Address cannot be empty"),
      businessType: isNotEmpty("Designation cannot be empty"),
      // files:isNotEmpty('This field cannot be empty')
    },
  });

  const openRef = useRef(null);
  return (
    <>
      <div className="admin_wrap container-fluid">
        <SideMenu />
        <div className="admin-content-area">
          <AdminHeader />
          <div className="dashboard-widget-wrap">
            <div className="card admin-card-wedget">
              <form
                onSubmit={form.onSubmit((values) => {
                  console.log(
                    values,
                    "edited Values ++++++++=========================="
                  );
                  dispatch(updateClientAdmin(values)); //calling the update action
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
                        // value={professionalAdmin_data.email}
                        placeholder="Email address"
                        {...form.getInputProps("email")}
                      />
                    </div>
                    <div className="col-lg-12">
                      <TextInput
                        // value={professionalAdmin_data.mobile}
                        placeholder="Contact number"
                        {...form.getInputProps("mobile")}
                      />
                    </div>
                    <div className="col-lg-12">
                      <TextInput
                        // value={professionalAdmin_data.membershipNumber}
                        placeholder="Membership number"
                        {...form.getInputProps("membershipNumber")}
                      />
                    </div>
                    <div className="col-lg-12">
                      <TextInput
                        // value={professionalAdmin_data.contactAddress}
                        placeholder="Location"
                        {...form.getInputProps("communicationAddress")}
                      />
                    </div>
                    <div className="col-lg-12">
                      <TextInput
                        // value={professionalAdmin_data.contactAddress}
                        placeholder="Gst Number"
                        {...form.getInputProps("gstNumber")}
                      />
                    </div>
                    <div className="col-lg-12">
                      <TextInput
                        // value={professionalAdmin_data.contactAddress}
                        placeholder="Pan Number"
                        {...form.getInputProps("panNumber")}
                      />
                    </div>
                    <div className="col-lg-12">
                      <TextInput
                        placeholder="Comapany name"
                        {...form.getInputProps("companyName")}
                      />
                    </div>
                    <div className="col-lg-12">
                      <TextInput
                        placeholder="Designation"
                        {...form.getInputProps("businessType")}
                      />
                    </div>
                    {/* Files Upload */}
                    {/* <div className="col-lg-12">
                      
                      <Dropzone
                        openRef={openRef}
                        {...form.getInputProps("files")}
                        onDrop={(files) => {
                          console.log("accepted files", files);
                          console.log("accepted files", files[0].path);
                          files.map((item, index) => {
                            image.push(item);
                          });
                        }}
                        accept={IMAGE_MIME_TYPE}
                        onReject={(files) =>
                          console.log("rejected files", files)
                        }
                        activateOnClick={false}
                        className="file-select-input"
                        styles={{ inner: { pointerEvents: "all" } }}
                      >
                        {(status) => dropzoneChildren(status, theme)}
                        <button
                          onClick={() => openRef.current()}
                          className="file-load-btn"
                        >
                          <span className="icon">
                            <svg
                              width="34"
                              height="34"
                              viewBox="0 0 34 34"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M16.9669 -7.60645e-08C17.9279 -3.40552e-08 18.707 0.779091 18.707 1.74015L18.707 32.1927C18.707 33.1538 17.9279 33.9329 16.9669 33.9329C16.0058 33.9329 15.2267 33.1538 15.2267 32.1927L15.2267 1.74015C15.2267 0.779091 16.0058 -1.18074e-07 16.9669 -7.60645e-08Z"
                                fill="#47B6F4"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0 17.8368C0 16.8758 0.779091 16.0967 1.74015 16.0967L32.1927 16.0967C33.1538 16.0967 33.9329 16.8758 33.9329 17.8368C33.9329 18.7979 33.1538 19.577 32.1927 19.577L1.74015 19.577C0.779091 19.577 0 18.7979 0 17.8368Z"
                                fill="#47B6F4"
                              />
                            </svg>
                          </span>
                          Upload documents/ID
                        </button>
                      </Dropzone>
                    </div> */}
                    <div className="col-lg-12">
                      <NativeSelect
                        data={[
                          "Assign client/Task",
                          "submenu 1",
                          "submenu 2",
                          "submenu 3",
                        ]}
                        withAsterisk
                      />
                    </div>
                    <div className="col-lg-12 actions place-center mt-5">
                      <Button type="submit">Edit Details</Button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
