import AdminFooter from "@/components/common/admin-footer";
import AdminHeader from "@/components/common/admin-header";
//import CreateManager from "@/components/professional-manager-card/create-manager";
import CreateUser from "@/components/professional-user-card/create-user";
import SideMenu from "@/components/sideMenu";
import { useRouter } from "next/router";


export default function ProfessionalManagerCreate() {
    const router = useRouter();
  const userId = router.query.edit;
  console.log("path");
  console.log(userId);
    return <>
    <div className="admin_root_wrap">
    <div className='admin_wrap container-fluid'>
          <SideMenu />
          <div className="admin-content-area">
            <AdminHeader />
            <div className="dashboard-widget-wrap">
                <CreateUser userId= {userId} />
              
            </div>
          </div>
        </div>
        <AdminFooter />
        </div>
    </>
  }