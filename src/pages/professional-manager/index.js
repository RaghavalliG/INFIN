import AdminFooter from "@/components/common/admin-footer";
import AdminHeader from "@/components/common/admin-header";
import Header from "@/components/common/header";
import ProfessionalManagerCard from "@/components/professional-manager-card";
import SideMenu from "@/components/sideMenu";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { professionalAdminProfessionalManagerList } from "store/actions/professionalAdminAction";
import { toast } from "react-toastify";
import Loading from "@/components/common/loading";
import Link from "next/link";
import { useRouter } from "next/router";
import CSVDownload from "@/components/common/CSVDownload";

export default function ProfessionalManager() {
  const dispatch = useDispatch();
  const router = useRouter();
  const managerId = router.query.managerId;
  console.log("path",router.query);
  console.log(managerId);
  let headers = [
    { label: "First Name", key: "firstName" },
    { label: "Last Name", key: "lastName" },
    { label: "ContactNumber", key: "mobile" },
    { label: "Email", key: "email" },
  ];
 
  useEffect(() => {
    dispatch(professionalAdminProfessionalManagerList());
  }, [])
  const result = useSelector((state) => state.professionalManagerList.professionalManagerList)
  const professionalManager_list = result.content;
  console.log(professionalManager_list, "=====");
  
  return <>
    <div className="admin_root_wrap">
      <div className='admin_wrap container-fluid'>
        <SideMenu />
        <div className="admin-content-area">
          <AdminHeader />
          <div className="admin-filter-action">
            
          {professionalManager_list ? (
                <div className="btn btn-sm btn-light-blue" ><CSVDownload
                  data={professionalManager_list}
                  headers={headers}
                  filename={"professional Manager list"}
                /></div>
              ) : (
                ""
              )}
            <Link href="/professional-manager/add" className="btn btn-primary-light"><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg></span> Add Professional Manager</Link>
          </div>
          {professionalManager_list && professionalManager_list.length > 0 ?
            <div className="dashboard-widget-wrap">
              {professionalManager_list?.map((item, key) => {
                return (
                  <ProfessionalManagerCard key={`professional-manager-${key}`} professionalManager_list={item} />
                )
              }
              )}
            </div> : <Loading />}

        </div>
      </div>
      <AdminFooter />
    </div>
  </>
}