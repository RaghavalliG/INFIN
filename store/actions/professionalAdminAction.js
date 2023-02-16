import {
    PROFESSIONAL_ADMIN_SIGNUP,
    PROFESSIONAL_ADMIN_SIGNUP_ERROR,

} from "../types";
import axios from "axios";

export const handleSignup = (e) => async (dispatch) => {
    console.log(e)

    // const id = toast.loading("Please wait...");

    // console.log(data);

    try {
        var data = JSON.stringify({
            "name": e.first_name,
            "email": e.email,
            "password": e.password,
            "mobile": e.contact_number,
            "role": ["professional-admin"],
            "professionalAdminDetail": {
                'membershipNumber': e.membership_number,
                'contactAddress': e.contact_address
            }
        });
        var config = {
            method: "post",
            url: `${process.env.NEXT_PUBLIC_API_URL}api/professional-admin/signup`,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                // 'Origin':'*'
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
        console.log(error, '++++')
        dispatch({
            type: PROFESSIONAL_ADMIN_SIGNUP_ERROR,
            payload: error?.response?.error?.message,
        });
    }
};