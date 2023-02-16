import {
  PROFESSIONAL_ADMIN_SIGNUP,
  PROFESSIONAL_ADMIN_SIGNUP_ERROR,
  PROFESSIONAL_ADMIN_DETAILS,
  PROFESSIONAL_ADMIN_DETAILS_ERROR,
  DASHBOARD_CLIENT_LIST,
  DASHBOARD_CLIENT_LIST_ERRORS,
} from "../types";
import axios from "axios";

export const handleSignup = (e) => async (dispatch) => {
  console.log(e);

  // const id = toast.loading("Please wait...");
  const professionalAdminDetail = {
    membershipNumber: e.membership_number,
    contactAddress: e.contact_address,
  };
  const data = {
    name: e.first_name + " " + e.last_name,
    email: e.email,
    password: e.password,
    mobile: e.contact_number,
    role: ["professional-admin"],
    professionalAdminDetail: professionalAdminDetail,
  };
  console.log(data);

  try {
    //   var formData = new FormData();
    //   formData.append('name', e.first_name + ' ' +e.last_name);
    //   formData.append('email', e.email);
    //   formData.append('password', e.password);
    //   formData.append('mobile', e.contact_number);
    //   formData.append('role', "professional-admin");
    //   formData.append('professionalAdminDetail', professionalAdminDetail);
    //   console.log(formData);
    var config = {
      method: "post",
      url: `${process.env.NEXT_PUBLIC_API_URL}api/professional-admin/signup`,
      headers: {
        "Content-Type": "application/json",
        // 'Authorization': `Bearer ${process.env.NEXT_PUBLIC_TOCKEN}`,
      },
      data: data,
    };
    const res = await axios(config);
    if (res.data) {
      dispatch({
        type: PROFESSIONAL_ADMIN_SIGNUP,
        payload: res.data,
      });
    }
  } catch (error) {
    console.log(error, "++++");
    dispatch({
      type: PROFESSIONAL_ADMIN_SIGNUP_ERROR,
      payload: error?.response?.error?.message,
    });
  }
};

export const professionalAdminFrofileDetails = (e) => async (dispatch) => {
  try {
    console.log("funciton call");
    var config = {
      method: "GET",
      url: `${process.env.NEXT_PUBLIC_API_URL}api/professional-admin/professional-admin-profile-detail`,
      headers: {
        "Content-Type": "application/json",
        // 'Authorization': `Bearer ${process.env.NEXT_PUBLIC_TOCKEN}`,
        Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNjc2NDc5OTc1LCJleHAiOjE2NzcwODQ3NzV9.uxzVeuxLY7KyRrE24f4hE0g1aD2kQjGreVHg4AQ8ARsWw97dnoCyeq4MAKhksiQPfvnOHJvJsLvAJGnq8B_yoQ`
      },
    };

    const res = await axios(config);
    if (res.data) {
      dispatch({
        type: PROFESSIONAL_ADMIN_DETAILS,
        payload: res.data,
      });
    }
  } catch (error) {
    console.log(error, "professional admin details error");
    dispatch({
      type: PROFESSIONAL_ADMIN_DETAILS_ERROR,
      payload: error?.response?.error?.message,
    });
  }
};

export const professionalclientFrofileDetails = (e) => async () => {
  try {
    var config = {
      method: "GET",
      url: `${process.env.NEXT_PUBLIC_API_URL}api/professional-admin/client-admin-profile-detail/3`,
      headers: {
        "Content-Type": "application/json",
        // 'Authorization': `Bearer ${process.env.NEXT_PUBLIC_TOCKEN}`,
      },
    };

    const res = await axios(config);
    if (res.data) {
      dispatch({
        type: PROFESSIONAL_CLIENT_DETAILS,
        payload: res.data,
      });
    }
  } catch (error) {
    console.log(error, "professional clinet details error");
    dispatch({
      type: PROFESSIONAL_CLIENT_DETAILS_ERRORS,
      payload: error?.response?.error?.message,
    });
  }
};

export const dashboardClientList = (e) => async ()=>{
  try {
    var config = {
      method: "GET",
      url: `${process.env.NEXT_PUBLIC_API_URL}api/professional-admin/client`,
      headers: {
        "Content-Type": "application/json",
        // 'Authorization': `Bearer ${process.env.NEXT_PUBLIC_TOCKEN}`,
      },
    };

    const res = await axios(config);
    if (res.data) {
      dispatch({
        type: DASHBOARD_CLIENT_LIST,
        payload: res.data,
      });
    }
  } catch (error) {
    console.log(error, "professional clinet details error");
    dispatch({
      type: DASHBOARD_CLIENT_LIST_ERRORS,
      payload: error?.response?.error?.message,
    });
  }
}
