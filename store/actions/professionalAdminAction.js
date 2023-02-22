import {
  AUTH_LOGIN_START,
  AUTH_LOGIN,
  AUTH_ERROR,
  PROFESSIONAL_ADMIN_SIGNUP,
  PROFESSIONAL_ADMIN_SIGNUP_ERROR,
  PROFESSIONAL_ADMIN_DETAILS,
  PROFESSIONAL_ADMIN_DETAILS_ERROR,
  DASHBOARD_CLIENT_LIST,
  DASHBOARD_CLIENT_LIST_ERRORS,
  ADMIN_CLIENT_DETAILS,
  ADMIN_CLIENT_DETAILS_ERRORS,
  FORGET_PASSWORD,
  FORGET_PASSWORD_ERROR,
  VERIFY_TOKEN,
  VERIFY_TOKEN_ERROR,
  PROFESSIONAL_ADMIN_EDIT,
  PROFESSIONAL_ADMIN_EDIT_ERRORS,
  CHANGE_PASSWORD,
  CHANGE_PASSWORD_ERROR,
} from "../types";
import axios from "axios";
import Router from "next/router";
import { toast } from "react-toastify";

// create action for sign in
export const handleLogin = (e) => async (dispatch) => {
  dispatch({
    type: AUTH_LOGIN_START,
  });
  try {
    let data = {
      "email": e.email,
      "password": e.password
    };
    var config = {
      method: "post",
      url: `${process.env.NEXT_PUBLIC_API_URL}api/auth/signin`,  // api calling
      headers: {
        "Content-Type": "application/json",
      },
      data: data
    };
    const res = await axios(config);
    const jwt = res.data;
    if (jwt) {
      localStorage.setItem("token_key", res.data.accessToken); //store the token to the localhost
      localStorage.setItem("id", res.data.id);
      if (res.data.roles[0] == "ROLE_PROFESSIONAL_ADMIN") {
        Router.push("/professional-admin")
      }
      toast.success("login successfull", {
        onClose: () => Router.push("/professional-admin"),
      });

      dispatch({
        type: AUTH_LOGIN,
        payload: jwt,
      });
    }
  } catch (error) {
    toast.error(error.response.data.message, {
      onClose: () => location.reload(),
    });
    dispatch({
      type: AUTH_ERROR,
      payload: error.response,
    });
  }
};
//creating action for sign up 
export const handleSignup = (e) => async (dispatch) => {
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
  try {
    var config = {
      method: "post",
      url: `${process.env.NEXT_PUBLIC_API_URL}api/professional-admin/signup`,  //api calling
      headers: {
        "Content-Type": "application/json",
        // 'Authorization': `Bearer ${process.env.NEXT_PUBLIC_TOCKEN}`,
      },
      data: data,
    };
    const res = await axios(config);
    if (res.data) {
      toast.success(res.data.message, {
        onClose: () => Router.push("/login")
      });

      dispatch({
        type: PROFESSIONAL_ADMIN_SIGNUP,
        payload: res.data,
      });
    }
  } catch (error) {
    console.log(error, "++++");
    dispatch({                                     //for error occur at the time of register 
      type: PROFESSIONAL_ADMIN_SIGNUP_ERROR,
      payload: error?.response?.error?.message,
    });
  }
};


 // create action for Log out 

export const handleLogout = (e) => async (dispatch) => {
  localStorage.clear();
  sessionStorage.clear();    //remove the data from localStorage 
  Router.push("/login")
  // toast.success("logged out succesfully", {
  //     onClose: () => Router.push("/"),
  //   });

} 

 // create action for forgetPassword
export const forgetPassword = (e) => async (dispatch) => {
  try {
    let data = {
      "email": e.email,        //checking users email 
    };
    // console.log("funciton call");
    var config = {
      method: "POST",
      url: `${process.env.NEXT_PUBLIC_API_URL}api/password/forget-password`, //calling the api
      headers: {
        "Content-Type": "application/json",
        // 'Authorization': `Bearer ${process.env.NEXT_PUBLIC_TOCKEN}`,
        // Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNjc2NDc5OTc1LCJleHAiOjE2NzcwODQ3NzV9.uxzVeuxLY7KyRrE24f4hE0g1aD2kQjGreVHg4AQ8ARsWw97dnoCyeq4MAKhksiQPfvnOHJvJsLvAJGnq8B_yoQ`
      },
      data: data,
    };

    const res = await axios(config);
    if (res.data) {               //checking email and routing to the forget password page 
      Router.push("/token");
      dispatch({          
        type: FORGET_PASSWORD,
        payload: res.data,
      });
    }
  } catch (error) {
    console.log(error, "forget password error");
    dispatch({                        //for error occur 
      type: FORGET_PASSWORD_ERROR,
      payload: error?.response?.error?.message,
    });
  }
}

  // // create action for token verification
export const verifyToken = (e) => async (dispatch) => {
  try {
    let token = e.token
    // console.log("funciton call");
    var config = {
      method: "GET",
      url: `${process.env.NEXT_PUBLIC_API_URL}api/password/verify-reset-token/${token}`,
      headers: {
        "Content-Type": "application/json",
        // 'Authorization': `Bearer ${process.env.NEXT_PUBLIC_TOCKEN}`,
        // Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNjc2NDc5OTc1LCJleHAiOjE2NzcwODQ3NzV9.uxzVeuxLY7KyRrE24f4hE0g1aD2kQjGreVHg4AQ8ARsWw97dnoCyeq4MAKhksiQPfvnOHJvJsLvAJGnq8B_yoQ`
      },

    };

    const res = await axios(config);
    if (res.data) {                    
      Router.push("/reset-password");
      dispatch({
        type: VERIFY_TOKEN,
        payload: res.data,
      });
    }
  } catch (error) {
    console.log(error, "verify token error");
    dispatch({
      type: VERIFY_TOKEN_ERROR,
      payload: error?.response?.error?.message,
    });
  }
}

 // create action for reset the password
export const resetPassword = (e) => async (dispatch) => {
  try {
    let data = {                    //checking credentials
      resetToken: e.token,
      password: e.password,
    }
    // console.log("funciton call");
    var config = {
      method: "POST",
      url: `${process.env.NEXT_PUBLIC_API_URL}api/password/update-new-password`,
      headers: {
        "Content-Type": "application/json",
        // 'Authorization': `Bearer ${process.env.NEXT_PUBLIC_TOCKEN}`,
        // Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNjc2NDc5OTc1LCJleHAiOjE2NzcwODQ3NzV9.uxzVeuxLY7KyRrE24f4hE0g1aD2kQjGreVHg4AQ8ARsWw97dnoCyeq4MAKhksiQPfvnOHJvJsLvAJGnq8B_yoQ`
      },
      data: data

    };

    const res = await axios(config);
    if (res.data) {
      Router.push("/login");
      dispatch({
        type: VERIFY_TOKEN,
        payload: res.data,
      });
    }
  } catch (error) {
    console.log(error, "verify token error");
    dispatch({
      type: VERIFY_TOKEN_ERROR,
      payload: error?.response?.error?.message,
    });
  }
}

export const changePassword = (e) => async (dispatch) => {
  try {
    let data = {
      "oldPassword": e.oldPassword,
      "newPassword": e.newPassword,
    };
    // console.log("funciton call");
    var config = {
      method: "POST",
      url: `${process.env.NEXT_PUBLIC_API_URL}api/professional-admin/change-password`,
      headers: {
        "Content-Type": "application/json",
        // 'Authorization': `Bearer ${process.env.NEXT_PUBLIC_TOCKEN}`,
        Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNjc2NDc5OTc1LCJleHAiOjE2NzcwODQ3NzV9.uxzVeuxLY7KyRrE24f4hE0g1aD2kQjGreVHg4AQ8ARsWw97dnoCyeq4MAKhksiQPfvnOHJvJsLvAJGnq8B_yoQ`
      },
      data: data,
    };

    const res = await axios(config);
    if (res.data) {
      toast.success("Changed Password successfull", {
        onClose: () => Router.push("/login"),
      });
      // Router.push("/token");
      dispatch({
        type: CHANGE_PASSWORD,
        payload: res.data,
      });
    }
  } catch (error) {
    console.log(error, "forget password error");
    dispatch({
      type: CHANGE_PASSWORD_ERROR,
      payload: error?.response?.error?.message,
    });
  }
}

export const professionalAdminProfileDetails = (e) => async (dispatch) => {
  var token = localStorage.getItem("token_key");
  try {
    // console.log("funciton call");
    var config = {
      method: "GET",
      url: `${process.env.NEXT_PUBLIC_API_URL}api/professional-admin/professional-admin-profile-detail`,
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`,
        // Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNjc2NDc5OTc1LCJleHAiOjE2NzcwODQ3NzV9.uxzVeuxLY7KyRrE24f4hE0g1aD2kQjGreVHg4AQ8ARsWw97dnoCyeq4MAKhksiQPfvnOHJvJsLvAJGnq8B_yoQ`
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


//creating action for getting the client admin profile details 

export const adminclientProfileDetails = (e) => async (dispatch) => {

  let clientid = e.clientid;
  try {
    var config = {
      method: "GET",
      url: `${process.env.NEXT_PUBLIC_API_URL}api/professional-admin/client-admin-profile-detail/${clientid}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNjc2NDc5OTc1LCJleHAiOjE2NzcwODQ3NzV9.uxzVeuxLY7KyRrE24f4hE0g1aD2kQjGreVHg4AQ8ARsWw97dnoCyeq4MAKhksiQPfvnOHJvJsLvAJGnq8B_yoQ`

        // 'Authorization': `Bearer ${process.env.NEXT_PUBLIC_TOCKEN}`,
      },
    };

    const res = await axios(config);
    if (res.data) {
      dispatch({
        type: ADMIN_CLIENT_DETAILS,
        payload: res.data,
      });
    }
  } catch (error) {
    console.log(error, "professional clinet details error");
    dispatch({
      type: ADMIN_CLIENT_DETAILS_ERRORS,
      payload: error?.response?.error?.message,
    });
  }
};

export const updateProfessionalAdmin = (e) => async (dispatch) => {
  const professionalAdminDetail = {
    professionalAdminDetailId: e.professionalAdminDetailId,
    membershipNumber: e.membershipNumber,
    contactAddress: e.contactAddress,
  };

  const data = {
    name: e.fname + " " + e.lname,
    mobile: e.mobile,
    professionalAdminDetail: professionalAdminDetail,
  };
  console.log(data);
  try {
    var config = {
      method: "POST",
      url: `${process.env.NEXT_PUBLIC_API_URL}api/professional-admin/update-profile`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNjc2NDc5OTc1LCJleHAiOjE2NzcwODQ3NzV9.uxzVeuxLY7KyRrE24f4hE0g1aD2kQjGreVHg4AQ8ARsWw97dnoCyeq4MAKhksiQPfvnOHJvJsLvAJGnq8B_yoQ`

        // 'Authorization': `Bearer ${process.env.NEXT_PUBLIC_TOCKEN}`,
      },
      data: data,
    };

    const res = await axios(config);
    if (res.data) {
      toast.success("Updated successfull", {
        onClose: () => Router.push("/professional-admin"),
      });
      dispatch({
        type: PROFESSIONAL_ADMIN_EDIT,
        payload: res.data,
      });
    }
  } catch (error) {
    console.log(error, "professional admin edit error");
    dispatch({
      type: PROFESSIONAL_ADMIN_EDIT_ERRORS,
      payload: error?.response?.error?.message,
    });
  }
}


export const dashboardClientList = (e) => async (dispatch) => {
  try {
    var config = {
      method: "GET",
      url: `${process.env.NEXT_PUBLIC_API_URL}api/professional-admin/client`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNjc2NDc5OTc1LCJleHAiOjE2NzcwODQ3NzV9.uxzVeuxLY7KyRrE24f4hE0g1aD2kQjGreVHg4AQ8ARsWw97dnoCyeq4MAKhksiQPfvnOHJvJsLvAJGnq8B_yoQ`

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
