import {
    PROFESSIONAL_ADMIN_SIGNUP,
    PROFESSIONAL_ADMIN_SIGNUP_ERROR,
    
} from "../types";
import axios from "axios";

export const handleSignup = (e) => async (dispatch) => {
    console.log(e)
    
    // const id = toast.loading("Please wait...");
    const professionalAdminDetail = {
        'membershipNumber': e.membership_number,
        'contactAddress': e.contact_address
    }
    const data =
        {
            "name": e.first_name + ' ' +e.last_name,
            "email": e.email,
            "password":e.password,
            "mobile": e.contact_number,
            "role":["professional-admin"],
            "professionalAdminDetail": professionalAdminDetail
        }
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
            'Content-Type' : 'application/json',
          // 'Authorization': `Bearer ${process.env.NEXT_PUBLIC_TOCKEN}`,
        },
        data: data,
      };
      const res = await axios(config);
      if (res.data) {
        // toast.success(`Thank you for Registration `, {
        //   toastId: "register",
        //   onClose: () => {
        //     Router.push("/users/list");
        //   },
        // });
        dispatch({
          type: PROFESSIONAL_ADMIN_SIGNUP,
          payload: res.data,
        });
      }
    } catch (error) {
      console.log(error,'++++')
      dispatch({
        type: PROFESSIONAL_ADMIN_SIGNUP_ERROR,
        payload: error?.response?.error?.message,
      });
    }
  };