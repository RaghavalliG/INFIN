import AdminHeader from "@/components/common/admin-header";
import Footer from "@/components/common/footer";
import SideMenu from "@/components/sideMenu";
import { Button, NativeSelect, TextInput } from "@mantine/core";
import { useRef, useState } from "react";

import { isNotEmpty, useForm } from "@mantine/form";

export default function ClientAdminEdit() {
  const form = useForm({
    //Set the Initial Values
    initialValues: {
      companyName: "",
      contactPersonName: "",
      conatctNumber: "",
      email: "",
      businessType: "",
      empNumber: "",
      conatctAddress: "",
      businessRegNo: "",
      gstDetails: "",
    },

    // functions will be used to validate values at corresponding key
    validate: {
      companyName: (value) => (value == "" ? "Company Name is required" : null),
      contactPersonName: (value) =>
        value == "" ? "Primary contact person Name is required" : null,

      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      conatctNumber: (value) =>
        /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(value)
          ? null
          : "Please Check your number",

      conatctAddress: isNotEmpty("Address cannot be empty"),
      empNumber: isNotEmpty("Employee Number cannot be empty"),
      gstDetails: isNotEmpty("Gst Details  cannot be empty"),
      businessRegNo: isNotEmpty(
        "Business registration number  cannot be empty"
      ),
      businessType: isNotEmpty("Business Type cannot be empty"),
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
                  // dispatch(updateClientAdmin(values)); //calling the update action
                })}
              >
                <div className="card-body p-0">
                  <div className="row side-gap-0">
                    <div className="col-lg-12">
                      <TextInput
                        placeholder="Company Name"
                        {...form.getInputProps("companyName")}
                      />
                    </div>
                    <div className="col-lg-12">
                      <TextInput
                        placeholder="Primary contact person Name"
                        {...form.getInputProps("contactPersonName")}
                      />
                    </div>
                    <div className="col-lg-12">
                      <TextInput
                        placeholder="Contact number"
                        {...form.getInputProps("conatctNumber")}
                      />
                    </div>
                    <div className="col-lg-12">
                      <TextInput
                        placeholder="Email ID"
                        {...form.getInputProps("email")}
                      />
                    </div>
                    <div className="col-lg-12">
                      <TextInput
                        placeholder="Type of Business"
                        {...form.getInputProps("businessType")}
                      />
                    </div>
                    <div className="col-lg-12">
                      <TextInput
                        placeholder="Number of employees "
                        {...form.getInputProps("empNumber")}
                      />
                    </div>
                    <div className="col-lg-12">
                      <TextInput
                        placeholder="Full contact Address "
                        {...form.getInputProps("conatctAddress")}
                      />
                    </div>
                    <div className="col-lg-12">
                      <TextInput
                        placeholder=" Business Registration number "
                        {...form.getInputProps("businessRegNo")}
                      />
                    </div>
                    <div className="col-lg-12">
                      <TextInput
                        placeholder="GST details "
                        {...form.getInputProps("gstDetails")}
                      />
                    </div>

                    <div className="col-lg-12 actions place-center mt-5">
                      <Button type="submit">Edit Client User</Button>
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
