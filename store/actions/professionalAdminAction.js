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
  ADMIN_CLIENT_DETAILS_UPDATE,
  ADMIN_CLIENT_DETAILS_UPDATE_ERRORS,
  PROFESSIONAL_ADMIN_MANAGER_LIST,
  PROFESSIONAL_ADMIN_MANAGER_LIST_ERRORS,
  PROFESSIONAL_ADMIN_ADD_PROFESSIONAL_MANAGER,
  PROFESSIONAL_ADMIN_ADD_PROFESSIONAL_MANAGER_ERRORS,
  PROFESSIONAL_MANAGER_DETAILS,
  PROFESSIONAL_MANAGER_DETAILS_ERROR,
  PROFESSIONAL_ADMIN_UPDATE_PROFESSIONAL_MANAGER,
  PROFESSIONAL_ADMIN_UPDATE_PROFESSIONAL_MANAGER_ERRORS,
  INVITE_CLIENT,
  INVITE_CLIENT_ERROR,
  GET_USER_MAIL_DETAILS,
  GET_USER_MAIL_DETAILS_ERROR,
  PROFESSIONAL_ADMIN_PUSER_LIST,
  PROFESSIONAL_ADMIN_PUSER_LIST_ERRORS,
  PROFESSIONAL_ADMIN_ADD_PROFESSIONAL_USER,
  PROFESSIONAL_ADMIN_ADD_PROFESSIONAL_USER_ERRORS,
  PROFESSIONAL_USER_DETAILS,
  PROFESSIONAL_USER_DETAILS_ERROR,
  PROFESSIONAL_ADMIN_UPDATE_PROFESSIONAL_USER,
  PROFESSIONAL_ADMIN_UPDATE_PROFESSIONAL_USER_ERRORS,
  PROFESSIONAL_USER_DELETE,
  PROFESSIONAL_USER_DELETE_ERROR,
  PROFESSIONAL_MANAGER_DELETE,
  PROFESSIONAL_MANAGER_DELETE_ERROR,
  CLIENT_ADMIN_DELETE,
  CLIENT_ADMIN_DELETE_ERROR,
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
      email: e.email,
      password: e.password,
    };
    var config = {
      method: "post",
      url: `${process.env.NEXT_PUBLIC_API_URL}api/auth/signin`, // api calling
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    const res = await axios(config);
    const jwt = res.data;
    console.log(jwt);

    if (jwt) {
      if (res.data.success == false) {
        toast.success(res.data.message);
      } else {
        localStorage.setItem("token_key", res.data.accessToken); //store the token to the localhost
        localStorage.setItem("id", res.data.id);
        localStorage.setItem("firstname", res.data.firstName);
        localStorage.setItem("lastname", res.data.lastName);
        localStorage.setItem("userroles", res.data.roles);
        // if (res.data.roles[0] == "ROLE_PROFESSIONAL_ADMIN") {
        //   Router.push("/dashboard");
        // }
        toast.success("login successfull", {
          onClose: Router.push("/dashboard"),
        });
      }

      dispatch({
        type: AUTH_LOGIN,
        payload: jwt,
      });
    }
  } catch (error) {
    // console.log(error);
    toast.error(error.response?.data?.message);
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
    firstName: e.firstName,
    lastName: e.lastName,

    email: e.email,
    password: e.password,
    mobile: e.contact_number,
    role: e.role,
    professionalAdminDetail: professionalAdminDetail,
  };
  // console.log(data);
  try {
    var config = {
      method: "post",
      url: `${process.env.NEXT_PUBLIC_API_URL}api/professional-admin/signup`, //api calling
      headers: {
        "Content-Type": "application/json",
        // 'Authorization': `Bearer ${process.env.NEXT_PUBLIC_TOCKEN}`,
      },
      data: data,
    };
    const res = await axios(config);
    if (res.data) {
      toast.success(res.data.message, {
        onClose: () => Router.push("/login"),
      });

      dispatch({
        type: PROFESSIONAL_ADMIN_SIGNUP,
        payload: res.data,
      });
    }
  } catch (error) {
    console.log(error, "++++");
    dispatch({
      //for error occur at the time of register
      type: PROFESSIONAL_ADMIN_SIGNUP_ERROR,
      payload: error?.response?.error?.message,
    });
  }
};

// create action for client sign in
export const handleClientSignup = (e) => async (dispatch) => {
  const clientAdminDetail = {
    companyName: e.companyName,
    panNumber: e.panNumber,
    gstNumber: e.gstNumber,
    businessType: e.businessType,
    communicationAddress: e.contact_address,
  };
  const data = {
    firstName: e.firstName,
    lastName: e.lastName,
    email: e.email,
    password: e.password,
    mobile: e.contact_number,
    role: e.role,
    clientAdminDetail: clientAdminDetail,
  };
  // console.log(data);
  try {
    var config = {
      method: "post",
      url: `${process.env.NEXT_PUBLIC_API_URL}api/client-admin/signup`, //api calling
      headers: {
        "Content-Type": "application/json",
        // 'Authorization': `Bearer ${process.env.NEXT_PUBLIC_TOCKEN}`,
      },
      data: data,
    };
    const res = await axios(config);
    if (res.data) {
      toast.success(res.data.message, {
        onClose: () => Router.push("/login"),
      });

      dispatch({
        type: PROFESSIONAL_ADMIN_SIGNUP,
        payload: res.data,
      });
    }
  } catch (error) {
    console.log(error, "++++");
    dispatch({
      //for error occur at the time of register
      type: PROFESSIONAL_ADMIN_SIGNUP_ERROR,
      payload: error?.response?.error?.message,
    });
  }
};

// create action for getting details for register with email
export const detailsWithEmail = (e) => async (dispatch) => {
  var token = localStorage.getItem("token_key");
  console.log(e);
  try {
    var config = {
      method: "GET",
      url: `${process.env.NEXT_PUBLIC_API_URL}api/invite/detail/${e}`,
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
        // Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNjc2NDc5OTc1LCJleHAiOjE2NzcwODQ3NzV9.uxzVeuxLY7KyRrE24f4hE0g1aD2kQjGreVHg4AQ8ARsWw97dnoCyeq4MAKhksiQPfvnOHJvJsLvAJGnq8B_yoQ`
      },
    };

    const res = await axios(config);
    if (res.data) {
      // toast.success("Professional Admin profile detail"),
      // });
      dispatch({
        type: GET_USER_MAIL_DETAILS,
        payload: res.data,
      });
    }
  } catch (error) {
    toast.error(error, {
      onClose: () => location.reload(),
    });
    dispatch({
      type: GET_USER_MAIL_DETAILS_ERROR,
      payload: error?.response?.error?.message,
    });
  }
};
// create action for Log out

export const handleLogout = (e) => async (dispatch) => {
  localStorage.clear();
  sessionStorage.clear(); //remove the data from localStorage
  Router.push("/login");
  toast.success("logged out succesfully", {
    onClose: () => Router.push("/"),
  });
};

// create action for forgetPassword
export const forgetPassword = (e) => async (dispatch) => {
  try {
    let data = {
      email: e.email, //checking users email
    };
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
    if (res.data) {
      toast.success(res.data.message, {
        onClose: () => Router.push("/reset-password"),
      });
      //checking email and routing to the forget password page
      dispatch({
        type: FORGET_PASSWORD,
        payload: res.data,
      });
    }
  } catch (error) {
    toast.error(error.response.data.message, {
      onClose: () => location.reload(),
    });

    dispatch({
      //for error occur
      type: FORGET_PASSWORD_ERROR,
      payload: error?.response?.error?.message,
    });
  }
};

// // create action for token verification
export const verifyToken = (e) => async (dispatch) => {
  try {
    let token = e.token;
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
};

// create action for reset the password
export const resetPassword = (e) => async (dispatch) => {
  try {
    let data = {
      //checking credentials
      resetToken: e.token,
      password: e.password,
    };
    var config = {
      method: "POST",
      url: `${process.env.NEXT_PUBLIC_API_URL}api/password/update-new-password`,
      headers: {
        "Content-Type": "application/json",
        // 'Authorization': `Bearer ${process.env.NEXT_PUBLIC_TOCKEN}`,
        // Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNjc2NDc5OTc1LCJleHAiOjE2NzcwODQ3NzV9.uxzVeuxLY7KyRrE24f4hE0g1aD2kQjGreVHg4AQ8ARsWw97dnoCyeq4MAKhksiQPfvnOHJvJsLvAJGnq8B_yoQ`
      },
      data: data,
    };

    const res = await axios(config);
    if (res.data) {
      toast.success(res.data.message, {
        onClose: () => Router.push("/login"),
      });

      dispatch({
        type: VERIFY_TOKEN,
        payload: res.data,
      });
    }
  } catch (error) {
    toast.error(error.response.data.message);
    dispatch({
      type: VERIFY_TOKEN_ERROR,
      payload: error?.response?.error?.message,
    });
  }
};

export const changePassword = (e) => async (dispatch) => {
  var token = localStorage.getItem("token_key");
  try {
    let data = {
      oldPassword: e.oldPassword,
      newPassword: e.newPassword,
    };
    var config = {
      method: "POST",
      url: `${process.env.NEXT_PUBLIC_API_URL}api/password/change-password`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        // Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNjc2NDc5OTc1LCJleHAiOjE2NzcwODQ3NzV9.uxzVeuxLY7KyRrE24f4hE0g1aD2kQjGreVHg4AQ8ARsWw97dnoCyeq4MAKhksiQPfvnOHJvJsLvAJGnq8B_yoQ`
      },
      data: data,
    };

    const res = await axios(config);
    if (res.data) {
      toast.success("Changed Password successfull", {
        onClose: () => Router.push("/login"),
      });
      dispatch({
        type: CHANGE_PASSWORD,
        payload: res.data,
      });
    }
  } catch (error) {
    toast.error(error.response.data.message, {
      onClose: () => location.reload(),
    });
    dispatch({
      type: CHANGE_PASSWORD_ERROR,
      payload: error?.response?.error?.message,
    });
  }
};

export const professionalAdminProfileDetails = (e) => async (dispatch) => {
  var token = localStorage.getItem("token_key");
  try {
    var config = {
      method: "GET",
      url: `${process.env.NEXT_PUBLIC_API_URL}api/professional-admin/professional-admin-profile-detail`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        // Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNjc2NDc5OTc1LCJleHAiOjE2NzcwODQ3NzV9.uxzVeuxLY7KyRrE24f4hE0g1aD2kQjGreVHg4AQ8ARsWw97dnoCyeq4MAKhksiQPfvnOHJvJsLvAJGnq8B_yoQ`
      },
    };

    const res = await axios(config);
    if (res.data) {
      // toast.success("Professional Admin profile detail",{
      // onClose: () => Router.push("/professional-admin"),
      // });
      dispatch({
        type: PROFESSIONAL_ADMIN_DETAILS,
        payload: res.data,
      });
    }
  } catch (error) {
    toast.error(error, {
      onClose: () => location.reload(),
    });
    dispatch({
      type: PROFESSIONAL_ADMIN_DETAILS_ERROR,
      payload: error?.response?.error?.message,
    });
  }
};

//creating action for getting the client admin profile details

export const adminclientProfileDetails = (e) => async (dispatch) => {
  var token = localStorage.getItem("token_key");
  console.log(e);
  // let clientid = e.clientid;
  try {
    var config = {
      method: "GET",
      url: `${process.env.NEXT_PUBLIC_API_URL}api/professional-admin/client-admin-profile-detail/${e.clientid}`,
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNjc2NDc5OTc1LCJleHAiOjE2NzcwODQ3NzV9.uxzVeuxLY7KyRrE24f4hE0g1aD2kQjGreVHg4AQ8ARsWw97dnoCyeq4MAKhksiQPfvnOHJvJsLvAJGnq8B_yoQ`

        Authorization: `Bearer ${token}`,
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
    toast.error(error?.response?.data?.message);
    // console.log(error, "professional clinet details error");
    dispatch({
      type: ADMIN_CLIENT_DETAILS_ERRORS,
      payload: error?.response?.error?.message,
    });
  }
};

export const updateProfessionalAdmin = (e) => async (dispatch) => {
  var token = localStorage.getItem("token_key");

  const professionalAdminDetail = {
    professionalAdminDetailId: e.professionalAdminDetailId,
    membershipNumber: e.membershipNumber,
    contactAddress: e.contactAddress,
  };

  const data = {
    firstName: e.firstName,
    lastName: e.lastName,
    mobile: e.mobile,
    professionalAdminDetail: professionalAdminDetail,
    role: 4,
  };
  // console.log(data);
  try {
    var config = {
      method: "POST",
      url: `${process.env.NEXT_PUBLIC_API_URL}api/professional-admin/update-profile`,
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNjc2NDc5OTc1LCJleHAiOjE2NzcwODQ3NzV9.uxzVeuxLY7KyRrE24f4hE0g1aD2kQjGreVHg4AQ8ARsWw97dnoCyeq4MAKhksiQPfvnOHJvJsLvAJGnq8B_yoQ`

        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    const res = await axios(config);
    if (res.data) {
      toast.success(res.data.message, {
        onClose: () => Router.push("/professional-admin"),
      });
      dispatch({
        type: PROFESSIONAL_ADMIN_EDIT,
        payload: res.data,
      });
    }
  } catch (error) {
    toast.error(error.response.data.message, {
      onClose: () => location.reload(),
    });
    // console.log(error, "professional admin edit error");
    dispatch({
      type: PROFESSIONAL_ADMIN_EDIT_ERRORS,
      payload: error?.response?.error?.message,
    });
  }
};

export const updateClientAdmin = (e) => async (dispatch) => {
  console.log(e, "EEEEEE====>>>>>>>>");
  var token = localStorage.getItem("token_key");

  const clientAdminDetail = {
    clientAdminDetailId: e.id,
    companyName: e.companyName,
    communicationAddress: e.communicationAddress,
    // membershipNumber: e.membershipNumber,
    panNumber: e.panNumber,
    gstNumber: e.gstNumber,
    businessType: e.businessType,
  };

  const data = {
    firstName: e.firstName,
    lastName: e.lastName,
    email: e.email,
    mobile: e.mobile,
    clientAdminDetail: clientAdminDetail,
  };

  console.log(data, "Data ==========>?>?>?>?>?>?");
  try {
    var config = {
      method: "PUT",
      url: `${process.env.NEXT_PUBLIC_API_URL}api/professional-admin/update-client-admin-profile/${e.id}`,
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNjc2NDc5OTc1LCJleHAiOjE2NzcwODQ3NzV9.uxzVeuxLY7KyRrE24f4hE0g1aD2kQjGreVHg4AQ8ARsWw97dnoCyeq4MAKhksiQPfvnOHJvJsLvAJGnq8B_yoQ`

        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    const res = await axios(config);
    if (res.data) {
      toast.success(res.data.message, {
        onClose: () => Router.push("/client-admin"),
      });
      dispatch({
        type: ADMIN_CLIENT_DETAILS_UPDATE,
        payload: res.data,
      });
    }
  } catch (error) {
    toast.error(error?.response?.data?.message, {
      onClose: () => location.reload(),
    });
    // console.log(error, "professional admin edit error");
    dispatch({
      type: ADMIN_CLIENT_DETAILS_UPDATE_ERRORS,
      payload: error?.response?.error?.message,
    });
  }
};

export const dashboardClientList = (e) => async (dispatch) => {
  // toast.loading('Waiting...',{isLoading: false, autoClose: 0 });
  var token = localStorage.getItem("token_key");
  try {
    var config = {
      method: "GET",
      url: `${process.env.NEXT_PUBLIC_API_URL}api/professional-admin/client`,
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNjc2NDc5OTc1LCJleHAiOjE2NzcwODQ3NzV9.uxzVeuxLY7KyRrE24f4hE0g1aD2kQjGreVHg4AQ8ARsWw97dnoCyeq4MAKhksiQPfvnOHJvJsLvAJGnq8B_yoQ`

        Authorization: `Bearer ${token}`,
      },
    };

    const res = await axios(config);

    if (res.data) {
      // toast.update(id, );
      toast.error(res.data.message, {
        onClose: () => Router.push("/client-admin"),
      });
      dispatch({
        type: DASHBOARD_CLIENT_LIST,
        payload: res.data,
      });
    }
  } catch (error) {
    toast.error(error?.response?.data?.message, {
      onClose: () => location.reload(),
    });
    // console.log(error, "professional clinet details error");
    dispatch({
      type: DASHBOARD_CLIENT_LIST_ERRORS,
      payload: error?.response?.error?.message,
    });
  }
};

export const professionalAdminProfessionalManagerList =
  (e) => async (dispatch) => {
    // toast.loading('Waiting...',{isLoading: false, autoClose: 0 });
    var token = localStorage.getItem("token_key");
    try {
      var config = {
        method: "GET",
        url: `${process.env.NEXT_PUBLIC_API_URL}api/professional-admin/professional-manager-list`,
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNjc2NDc5OTc1LCJleHAiOjE2NzcwODQ3NzV9.uxzVeuxLY7KyRrE24f4hE0g1aD2kQjGreVHg4AQ8ARsWw97dnoCyeq4MAKhksiQPfvnOHJvJsLvAJGnq8B_yoQ`

          Authorization: `Bearer ${token}`,
        },
      };

      const res = await axios(config);

      if (res.data) {
        // toast.update(id, );
        toast.error(res.data.message, {
          onClose: () => Router.push("/professional-manager"),
        });
        dispatch({
          type: PROFESSIONAL_ADMIN_MANAGER_LIST,
          payload: res.data,
        });
      }
    } catch (error) {
      toast.error(error.response.data.message, {
        onClose: () => location.reload(),
      });
      // console.log(error, "professional clinet details error");
      dispatch({
        type: PROFESSIONAL_ADMIN_MANAGER_LIST_ERRORS,
        payload: error?.response?.error?.message,
      });
    }
  };

export const addProfessionalManager = (e) => async (dispatch) => {
  console.log(e, "EEEEEEEEEEE===>>>");
  var token = localStorage.getItem("token_key");

  const data = {
    firstName: e.firstName,
    lastName: e.lastName,
    email: e.email,
    password: "123456987",
    mobile: e.mobile,
    role: 5,
    isVerified: 1,
    professionalManagerRequest: {
      validIdProof: "sdgsgdfgdfgdfgdffdhzdfmvgnv",
      location: e.location,
    },
  };
  try {
    var config = {
      method: "POST",
      url: `${process.env.NEXT_PUBLIC_API_URL}api/professional-admin/create-professional-manager`, //api calling
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };
    const res = await axios(config);
    if (res.data) {
      toast.success(res.data.message, {
        onClose: () => Router.push("/professional-manager"),
      });

      dispatch({
        type: PROFESSIONAL_ADMIN_ADD_PROFESSIONAL_MANAGER,
        payload: res.data,
      });
    }
  } catch (error) {
    console.log(error, "++++");
    toast.error(error?.response?.data?.message);
    dispatch({
      //for error occur at the time of register
      type: PROFESSIONAL_ADMIN_ADD_PROFESSIONAL_MANAGER_ERRORS,
      payload: error?.response?.message,
    });
  }
};

export const professionalManagerDetails = (e) => async (dispatch) => {
  console.log(e, "EEEEEEEEEEEEEE");
  var token = localStorage.getItem("token_key");
  try {
    var config = {
      method: "GET",
      url: `${process.env.NEXT_PUBLIC_API_URL}api/professional-admin/professional-manager-profile-detail/${e.managerId}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        // Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNjc2NDc5OTc1LCJleHAiOjE2NzcwODQ3NzV9.uxzVeuxLY7KyRrE24f4hE0g1aD2kQjGreVHg4AQ8ARsWw97dnoCyeq4MAKhksiQPfvnOHJvJsLvAJGnq8B_yoQ`
      },
    };

    const res = await axios(config);
    if (res.data) {
      // toast.success("Professional Admin profile detail",{
      // onClose: () => Router.push("/professional-admin"),
      // });
      dispatch({
        type: PROFESSIONAL_MANAGER_DETAILS,
        payload: res.data,
      });
    }
  } catch (error) {
    toast.error(error.response.data.message);
    dispatch({
      type: PROFESSIONAL_MANAGER_DETAILS_ERROR,
      payload: error?.response?.error?.message,
    });
  }
};

export const updateProfessionalManager = (e) => async (dispatch) => {
  var token = localStorage.getItem("token_key");
  console.log(e);

  const data = {
    firstName: e.firstName,
    lastName: e.lastName,
    mobile: e.mobile,
    professionalManagerRequest: {
      professionalManagerDetailId: e.professionalManagerDetailId,
      validIdProof: e.validIdProof,
      location: e.location,
    },
  };

  try {
    var config = {
      method: "PUT",
      url: `${process.env.NEXT_PUBLIC_API_URL}api/professional-admin/update-professional-manager-profile/${e.id}`, //api calling
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };
    const res = await axios(config);
    if (res.data) {
      toast.success(res.data.message, {
        onClose: () => Router.push("/professional-manager"),
      });

      dispatch({
        type: PROFESSIONAL_ADMIN_UPDATE_PROFESSIONAL_MANAGER,
        payload: res.data,
      });
    }
  } catch (error) {
    console.log(error, "++++");
    toast.error(error?.response?.data?.message);
    dispatch({
      //for error occur at the time of register
      type: PROFESSIONAL_ADMIN_UPDATE_PROFESSIONAL_MANAGER_ERRORS,
      payload: error?.response?.message,
    });
  }
};

export const inviteClient = (e) => async (dispatch) => {
  var token = localStorage.getItem("token_key");
  console.log(e);

  const data = {
    email: e.email,
    roleId: 7,
  };

  try {
    var config = {
      method: "POST",
      url: `${process.env.NEXT_PUBLIC_API_URL}api/invite/send`, //api calling
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };
    const res = await axios(config);
    if (res.data) {
      toast.success(res.data.message, {
        onClose: () => Router.push("/client-admin"),
      });

      dispatch({
        type: INVITE_CLIENT,
        payload: res.data,
      });
    }
  } catch (error) {
    console.log(error, "++++");
    toast.error(error?.response?.data?.message);
    dispatch({
      //for error occur at the time of invitation
      type: INVITE_CLIENT_ERROR,
      payload: error?.response?.message,
    });
  }
};

export const clientAdminDelete = (e) => async (dispatch) => {
  console.log(e, "EEEEEEEEEEEEEE");
  var token = localStorage.getItem("token_key");
  try {
    var config = {
      method: "DELETE",
      url: `${process.env.NEXT_PUBLIC_API_URL}api/professional-admin/delete-client-admin/${e.caid}/${e.cadid}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        // Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNjc2NDc5OTc1LCJleHAiOjE2NzcwODQ3NzV9.uxzVeuxLY7KyRrE24f4hE0g1aD2kQjGreVHg4AQ8ARsWw97dnoCyeq4MAKhksiQPfvnOHJvJsLvAJGnq8B_yoQ`
      },
    };

    const res = await axios(config);
    if (res.data) {
      toast.success(res.data.message);
      dispatch({
        type: CLIENT_ADMIN_DELETE,
        payload: res.data,
      });
    }
  } catch (error) {
    toast.error(error?.response?.data?.message);
    dispatch({
      type: CLIENT_ADMIN_DELETE_ERROR,
      payload: error?.response?.error?.message,
    });
  }
};
export const professionalManagerDelete = (e) => async (dispatch) => {
  console.log(e, "EEEEEEEEEEEEEE");
  var token = localStorage.getItem("token_key");
  try {
    var config = {
      method: "DELETE",
      url: `${process.env.NEXT_PUBLIC_API_URL}api/professional-admin/delete-professional-manager/${e.pmid}/${e.pmdid}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        // Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNjc2NDc5OTc1LCJleHAiOjE2NzcwODQ3NzV9.uxzVeuxLY7KyRrE24f4hE0g1aD2kQjGreVHg4AQ8ARsWw97dnoCyeq4MAKhksiQPfvnOHJvJsLvAJGnq8B_yoQ`
      },
    };

    const res = await axios(config);
    if (res.data) {
      toast.success(res.data.message, {
        // onClose: () => location.reload()
      });
      dispatch({
        type: PROFESSIONAL_MANAGER_DELETE,
        payload: res.data,
      });
    }
  } catch (error) {
    toast.error(error?.response?.data?.message);
    dispatch({
      type: PROFESSIONAL_MANAGER_DELETE_ERROR,
      payload: error?.response,
    });
  }
};

// PROFESSIONAL ADMIN MANAGE PROFESSIONAL USER
export const professionalAdminProfessionalUserList =
  (e) => async (dispatch) => {
    // toast.loading('Waiting...',{isLoading: false, autoClose: 0 });
    var token = localStorage.getItem("token_key");
    try {
      var config = {
        method: "GET",
        url: `${process.env.NEXT_PUBLIC_API_URL}api/professional-admin/professional-user-list`,
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNjc2NDc5OTc1LCJleHAiOjE2NzcwODQ3NzV9.uxzVeuxLY7KyRrE24f4hE0g1aD2kQjGreVHg4AQ8ARsWw97dnoCyeq4MAKhksiQPfvnOHJvJsLvAJGnq8B_yoQ`

          Authorization: `Bearer ${token}`,
        },
      };

      const res = await axios(config);

      if (res.data) {
        // toast.update(id, );
        toast.error(res.data.message, {
          onClose: () => Router.push("/professional-user"),
        });
        dispatch({
          type: PROFESSIONAL_ADMIN_PUSER_LIST,
          payload: res.data,
        });
      }
    } catch (error) {
      toast.error(error.response.data.message, {
        onClose: () => location.reload(),
      });
      // console.log(error, "professional clinet details error");
      dispatch({
        type: PROFESSIONAL_ADMIN_PUSER_LIST_ERRORS,
        payload: error?.response?.error?.message,
      });
    }
  };

export const addProfessionalUser = (e) => async (dispatch) => {
  console.log(e, "EEEEEEEEEEE===>>>");
  var token = localStorage.getItem("token_key");

  const data = {
    firstName: e.firstName,
    lastName: e.lastName,
    email: e.email,
    password: e.password,
    mobile: e.mobile,
    role: 6,
    professionalUserRequest: {
      validIdProof: "sdgsgdfgdfgdfgdffdhzdfmvgnv",
    },
  };
  try {
    var config = {
      method: "POST",
      url: `${process.env.NEXT_PUBLIC_API_URL}api/professional-admin/create-professional-user`, //api calling
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };
    const res = await axios(config);
    if (res.data) {
      toast.success(res.data.message, {
        onClose: () => Router.push("/professional-user"),
      });

      dispatch({
        type: PROFESSIONAL_ADMIN_ADD_PROFESSIONAL_USER,
        payload: res.data,
      });
    }
  } catch (error) {
    console.log(error, "++++");
    toast.error(error?.response?.data?.message);
    dispatch({
      //for error occur at the time of register
      type: PROFESSIONAL_ADMIN_ADD_PROFESSIONAL_USER_ERRORS,
      payload: error?.response?.message,
    });
  }
};

export const professionalUserDetails = (e) => async (dispatch) => {
  console.log(e, "EEEEEEEEEEEEEE");
  var token = localStorage.getItem("token_key");
  try {
    var config = {
      method: "GET",
      url: `${process.env.NEXT_PUBLIC_API_URL}api/professional-admin/professional-user-profile-detail/${e.userId}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        // Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNjc2NDc5OTc1LCJleHAiOjE2NzcwODQ3NzV9.uxzVeuxLY7KyRrE24f4hE0g1aD2kQjGreVHg4AQ8ARsWw97dnoCyeq4MAKhksiQPfvnOHJvJsLvAJGnq8B_yoQ`
      },
    };

    const res = await axios(config);
    if (res.data) {
      // toast.success("Professional Admin profile detail",{
      // onClose: () => Router.push("/professional-admin"),
      // });
      dispatch({
        type: PROFESSIONAL_USER_DETAILS,
        payload: res.data,
      });
    }
  } catch (error) {
    toast.error(error.response.data.message);
    dispatch({
      type: PROFESSIONAL_USER_DETAILS_ERROR,
      payload: error?.response?.error?.message,
    });
  }
};

export const updateProfessionalUser = (e) => async (dispatch) => {
  var token = localStorage.getItem("token_key");
  console.log(e);

  const data = {
    firstName: e.firstName,
    lastName: e.lastName,
    mobile: e.mobile,
    professionalUserRequest: {
      professionalUserDetailId: e.professionalUserDetailId,
      validIdProof: "sdfsdfgd",
    },
  };

  try {
    var config = {
      method: "PUT",
      url: `${process.env.NEXT_PUBLIC_API_URL}api/professional-admin/update-professional-user-profile/${e.id}`, //api calling
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };
    const res = await axios(config);
    if (res.data) {
      toast.success(res.data.message, {
        onClose: () => Router.push("/professional-user"),
      });

      dispatch({
        type: PROFESSIONAL_ADMIN_UPDATE_PROFESSIONAL_USER,
        payload: res.data,
      });
    }
  } catch (error) {
    console.log(error, "++++");
    toast.error(error?.response?.data?.message);
    dispatch({
      //for error occur at the time of register
      type: PROFESSIONAL_ADMIN_UPDATE_PROFESSIONAL_USER_ERRORS,
      payload: error?.response?.message,
    });
  }
};

export const professionalUserDelete = (e) => async (dispatch) => {
  console.log(e, "EEEEEEEEEEEEEE");
  var token = localStorage.getItem("token_key");
  try {
    var config = {
      method: "DELETE",
      url: `${process.env.NEXT_PUBLIC_API_URL}api/professional-admin/delete-professional-user/${e.puid}/${e.pudid}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        // Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiaWF0IjoxNjc2NDc5OTc1LCJleHAiOjE2NzcwODQ3NzV9.uxzVeuxLY7KyRrE24f4hE0g1aD2kQjGreVHg4AQ8ARsWw97dnoCyeq4MAKhksiQPfvnOHJvJsLvAJGnq8B_yoQ`
      },
    };

    const res = await axios(config);
    if (res.data) {
      toast.success(res.data.message, {
        onClose: () => location.reload(),
      });
      dispatch({
        type: PROFESSIONAL_USER_DELETE,
        payload: res.data,
      });
    }
  } catch (error) {
    toast.error(error?.response?.data?.message);
    dispatch({
      type: PROFESSIONAL_USER_DELETE_ERROR,
      payload: error?.response?.error?.message,
    });
  }
};
