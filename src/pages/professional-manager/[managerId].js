import { adminclientProfileDetails } from "store/actions/professionalAdminAction";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { handleLogout } from "store/actions/professionalAdminAction";
import { useRouter } from "next/router";
import SideMenu from "@/components/sideMenu";
import Link from "next/link";
import { professionalManagerDetails } from "store/actions/professionalAdminAction";
import AdminHeader from "@/components/common/admin-header";


export default function ProfessionalManagerDetail() {
    const router = useRouter();
  const managerId = router.query.managerId;
  console.log("path");
  console.log(managerId);
    const dispatch = useDispatch();

    useEffect(()=>{
        if (managerId && managerId != 'edit') {
            console.log(managerId)
        dispatch(professionalManagerDetails({ managerId: managerId }));
        }
    },[managerId, dispatch])
    const professional_manager_list = useSelector((state) => state.professionalManagerData.professionalManagerData)
    console.log(professional_manager_list,"=====");

    return <div className="dashboard-wrap">
        <div className="container dashboard-container">
        <div className="sidebar">
            {/* <div className="brand">
                <Image src="/logo.png" alt="" className="" width={200} height={80} />
            </div> */}
            <div className="sidebar-menus-card">
                <SideMenu />
               
            </div>
        </div>
        
        <div className="dashboard-content-area">
        
            <div className="block-content-box bg-primary profile-info-card">
                <div className="avatar"></div>
                <div className="info">
                    <h2 className="card-title">{professional_manager_list.firstName} {professional_manager_list.lastName}</h2>
                    <p className="card-text">Professional Manager</p>
                </div>
            </div>
            <div className="block-content-box profile-info-details-card">
                <div className="key-val-items">
                <div className="item"><span className="key">Contact Number: </span><span className="val">{professional_manager_list.mobile}</span></div>
                <div className="item"><span className="key">Email address: </span><span className="val">{professional_manager_list.email}</span></div>
                <div className="item"><span className="key">Membership number: </span><span className="val"></span></div>
                <div className="item"><span className="key">Contact address: </span><span className="val"></span></div>
                                  </div>
                                  <div className="action">
                                    <div onClick={(e) =>{e.preventDefault(); router.back()}} className="btn btn-primary-light">Go Back</div>
                                  </div>
            </div>
        </div>
        </div>
    </div>
  }