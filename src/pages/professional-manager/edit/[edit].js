import AdminFooter from "@/components/common/admin-footer";
import AdminHeader from "@/components/common/admin-header";
import CreateManager from "@/components/professional-manager-card/create-manager";
import SideMenu from "@/components/sideMenu";
import { useRouter } from "next/router";


export default function ProfessionalManagerCreate() {
    const router = useRouter();
  const managerId = router.query.edit;
  console.log("path");
  console.log(managerId);
    return <>
    <div className="admin_root_wrap">
    <div className='admin_wrap container-fluid'>
          <SideMenu />
          <div className="admin-content-area">
            <AdminHeader />
            <div className="dashboard-widget-wrap">
                <CreateManager managerId= {managerId} />
              
            </div>
          </div>
        </div>
        <AdminFooter />
        </div>
    </>
  }