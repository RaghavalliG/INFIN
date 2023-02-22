import { Avatar } from "@mantine/core";
import { professionalAdminProfileDetails } from "store/actions/professionalAdminAction";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

export default function AdminHeader() {
    // admin Header section
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(professionalAdminProfileDetails());
    }, [])
    const professionalAdmin_data = useSelector((state) => state.professionalAdminData.professionalAdminData)

    return <div className="admin-header">
        <div className="container-fluid">
            <div className="row">
                <div className="col-auto">
                <div className="avatar" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80)'}}></div>
                </div>
                <div className="col-auto"><h1 className="page-title">{professionalAdmin_data.name}</h1>
                    <p className="card-text">CEO</p>
                </div>
                <div className="col-auto ms-auto">
                    <a href=""><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.8052 1.19603C23.0971 0.488943 22.1372 0.0917969 21.1365 0.0917969C20.1357 0.0917969 19.1759 0.488943 18.4677 1.19603L1.52606 18.1377C1.0409 18.6201 0.656226 19.194 0.394285 19.826C0.132343 20.4581 -0.00166456 21.1358 1.56054e-05 21.82V23.9585C1.56054e-05 24.2348 0.109762 24.4998 0.305113 24.6951C0.500463 24.8905 0.765415 25.0002 1.04168 25.0002H3.18022C3.86435 25.0021 4.54207 24.8683 5.17414 24.6066C5.80621 24.3448 6.38007 23.9603 6.86252 23.4752L23.8052 6.53249C24.512 5.82436 24.9089 4.86474 24.9089 3.86426C24.9089 2.86377 24.512 1.90416 23.8052 1.19603ZM5.3896 22.0023C4.8021 22.5859 4.00831 22.9145 3.18022 22.9169H2.08335V21.82C2.08229 21.4095 2.16268 21.0028 2.31985 20.6236C2.47701 20.2443 2.70784 19.9 2.99897 19.6106L15.8563 6.75332L18.2521 9.14916L5.3896 22.0023ZM22.3313 5.05957L19.7208 7.67103L17.325 5.2804L19.9365 2.66895C20.2542 2.35193 20.6848 2.17411 21.1336 2.17459C21.5824 2.17508 22.0127 2.35384 22.3297 2.67155C22.6467 2.98926 22.8245 3.41989 22.8241 3.8687C22.8236 4.31752 22.6448 4.74776 22.3271 5.06478L22.3313 5.05957Z" fill="white" />
                    </svg>
                    </a>
                </div>
            </div>
        </div>

    </div>
}