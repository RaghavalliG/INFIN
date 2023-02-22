import AdminFooter from "@/components/common/admin-footer";
import AdminHeader from "@/components/common/admin-header";
import SideMenu from "@/components/sideMenu";
import ClientAdminCard from "@/components/client-admin-card";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { dashboardClientList } from "store/actions/professionalAdminAction";


export default function ClientList() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(dashboardClientList());
},[])
const result = useSelector((state) => state.dashboardClientlist.dashboardClientlist)
const client_list = result.content;
console.log(client_list,"=====");
    return <>
    <div className='admin_wrap container-fluid'>
          <SideMenu />
          <div className="admin-content-area">
            <AdminHeader />
            <div className="dashboard-widget-wrap">
            {client_list?.map((item,key)=>{
      return(
        <ClientAdminCard key={`client-admin-${key}`} client_list = {item}/>
      )
    }
 )} 
              
              
            </div>
          </div>
        </div>
        <AdminFooter />
    </>
  }